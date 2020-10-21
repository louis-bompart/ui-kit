import {PlatformClient, PlatformResponse} from '../platform-client';
import {PlanResponseSuccess, Plan} from './plan/plan-response';
import {
  QuerySuggestSuccessResponse,
  QuerySuggest,
} from './query-suggest/query-suggest-response';
import {baseSearchParams} from './search-api-params';
import {SearchRequest, searchRequest} from './search/search-request';
import {buildSpecificFacetSearchRequest} from './facet-search/specific-facet-search/specific-facet-search-request';
import {Search, SearchResponseSuccess} from './search/search-response';
import {
  SearchAPIErrorWithStatusCode,
  SearchAPIErrorWithExceptionInBody,
} from './search-api-error-response';
import {PlanRequest} from './plan/plan-request';
import {QuerySuggestRequest} from './query-suggest/query-suggest-request';
import {FacetSearchRequest} from './facet-search/facet-search-request';
import {FacetSearchResponse} from './facet-search/facet-search-response';
import {buildCategoryFacetSearchRequest} from './facet-search/category-facet-search/category-facet-search-request';
import {SearchAppState} from '../../state/search-app-state';
import {BaseRequest, baseSearchRequest} from './search-api-request';

export type AllSearchAPIResponse = Plan | Search | QuerySuggest;

export interface AsyncThunkSearchOptions<T = SearchAppState> {
  state: T;
  rejectValue: SearchAPIErrorWithStatusCode;
  extra: {
    searchAPIClient: SearchAPIClient;
  };
}

export interface SearchAPIClientOptions<RequestParams> {
  accessToken: string;
  apiBaseUrl: string;
  requestParams: RequestParams;
}

export type SearchAPIClientResponse<T> =
  | {success: T}
  | {error: SearchAPIErrorWithStatusCode};

export class SearchAPIClient {
  constructor(private renewAccessToken: () => Promise<string>) {}
  async plan(
    req: PlanRequest
  ): Promise<SearchAPIClientResponse<PlanResponseSuccess>> {
    const platformResponse = await PlatformClient.call<
      PlanRequest,
      PlanResponseSuccess
    >({
      ...baseSearchRequest(req, 'POST', 'application/json', '/plan'),
      requestParams: pickNonBaseParams(req) as PlanRequest, // TODO: This cast won't be needed once all methods have been reworked and we can change types in PlatformClient
      renewAccessToken: this.renewAccessToken,
    });

    if (isSuccessPlanResponse(platformResponse)) {
      return {success: platformResponse.body};
    }
    return {
      error: unwrapError(platformResponse)!,
    };
  }

  async querySuggest(
    req: QuerySuggestRequest
  ): Promise<SearchAPIClientResponse<QuerySuggestSuccessResponse>> {
    const platformResponse = await PlatformClient.call<
      QuerySuggestRequest,
      QuerySuggestSuccessResponse
    >({
      ...baseSearchRequest(req, 'POST', 'application/json', '/querySuggest'),
      requestParams: pickNonBaseParams(req) as QuerySuggestRequest, // TODO: This cast won't be needed once all methods have been reworked and we can change types in PlatformClient
      renewAccessToken: this.renewAccessToken,
    });
    if (isSuccessQuerySuggestionsResponse(platformResponse)) {
      return {
        success: platformResponse.body,
      };
    }
    return {
      error: unwrapError(platformResponse),
    };
  }

  async search(
    state: SearchAppState
  ): Promise<SearchAPIClientResponse<SearchResponseSuccess>> {
    const platformResponse = await PlatformClient.call<SearchRequest, Search>({
      ...baseSearchParams(state, 'POST', 'application/json', ''),
      requestParams: searchRequest(state),
      renewAccessToken: this.renewAccessToken,
    });

    if (isSuccessSearchResponse(platformResponse)) {
      return {
        success: platformResponse.body,
      };
    }

    return {
      error: unwrapError(platformResponse),
    };
  }

  async facetSearch(id: string, state: SearchAppState) {
    const isFacetSearch = id in state.facetSearchSet;
    const buildParams = isFacetSearch
      ? buildSpecificFacetSearchRequest
      : buildCategoryFacetSearchRequest;
    const requestParams = buildParams(id, state);

    const res = await PlatformClient.call<
      FacetSearchRequest,
      FacetSearchResponse
    >({
      ...baseSearchParams(state, 'POST', 'application/json', '/facet'),
      requestParams,
      renewAccessToken: this.renewAccessToken,
    });

    return res.body;
  }
}

const unwrapError = (res: PlatformResponse<AllSearchAPIResponse>) => {
  if (isException(res)) {
    return unwrapByBodyException(res);
  }
  if (isError(res)) {
    return unwrapByStatusCode(res);
  }

  return {message: 'unknown', statusCode: 0, type: 'unknown'};
};

const unwrapByBodyException = (
  res: PlatformResponse<SearchAPIErrorWithExceptionInBody>
) => ({
  message: res.body.exception.code,
  statusCode: res.response.status,
  type: res.body.exception.code,
});

const unwrapByStatusCode = (
  res: PlatformResponse<SearchAPIErrorWithStatusCode>
) => ({
  message: res.body.message,
  statusCode: res.body.statusCode,
  type: res.body.type,
});

export const isSuccessResponse = <T>(
  r: SearchAPIClientResponse<T>
): r is {success: T} => {
  return (r as {success: T}).success !== undefined;
};

export const isErrorResponse = <T>(
  r: SearchAPIClientResponse<T>
): r is {error: SearchAPIErrorWithStatusCode} => {
  return (r as {error: SearchAPIErrorWithStatusCode}).error !== undefined;
};

function isSuccessQuerySuggestionsResponse(
  r: PlatformResponse<QuerySuggest>
): r is PlatformResponse<QuerySuggestSuccessResponse> {
  return (
    (r as PlatformResponse<QuerySuggestSuccessResponse>).body.completions !==
    undefined
  );
}

function isSuccessPlanResponse(
  r: PlatformResponse<Plan>
): r is PlatformResponse<PlanResponseSuccess> {
  return (
    (r as PlatformResponse<PlanResponseSuccess>).body.preprocessingOutput !==
    undefined
  );
}

function isSuccessSearchResponse(
  r: PlatformResponse<Search>
): r is PlatformResponse<SearchResponseSuccess> {
  return (
    (r as PlatformResponse<SearchResponseSuccess>).body.results !== undefined
  );
}

function isError(
  r: PlatformResponse<AllSearchAPIResponse>
): r is PlatformResponse<SearchAPIErrorWithStatusCode> {
  return (
    (r as PlatformResponse<SearchAPIErrorWithStatusCode>).body.statusCode !==
    undefined
  );
}

function isException(
  r: PlatformResponse<AllSearchAPIResponse>
): r is PlatformResponse<SearchAPIErrorWithExceptionInBody> {
  return (
    (r as PlatformResponse<SearchAPIErrorWithExceptionInBody>).body
      .exception !== undefined
  );
}

function pickNonBaseParams<Params extends BaseRequest>(req: Params) {
  // cheap version of _.omit
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {url, accessToken, organizationId, ...nonBase} = req;
  return nonBase;
}
