import {SpecificFacetSearchRequest} from '../../../../api/search/facet-search/specific-facet-search/specific-facet-search-request';
import {buildSearchRequest} from '../../../search/search-request-builder';
import {StateNeededForSpecificFacetSearch} from '../generic/generic-facet-search-state';
export const buildSpecificFacetSearchRequest = (
  id: string,
  state: StateNeededForSpecificFacetSearch
): SpecificFacetSearchRequest => {
  const {captions, query, numberOfValues} = state.facetSearchSet[id].options;
  const {field, delimitingCharacter, currentValues} = state.facetSet[id];
  const searchContext = buildSearchRequest(state);
  const ignoreValues = currentValues
    .filter((v) => v.state !== 'idle')
    .map((facetValue) => facetValue.value);

  return {
    url: state.configuration.search.apiBaseUrl,
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    captions,
    numberOfValues,
    query,
    field,
    delimitingCharacter,
    ignoreValues,
    searchContext,
    type: 'specific',
  };
};
