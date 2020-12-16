import {ArrayValue} from '@coveo/bueno';
import {CategoryFacetMetadata} from 'coveo.analytics/src/searchPage/searchPageEvents';
import {SearchAppState} from '../../../state/search-app-state';
import {validatePayload} from '../../../utils/validate-payload';
import {
  AnalyticsType,
  makeAnalyticsAction,
} from '../../analytics/analytics-utils';
import {
  buildFacetStateMetadata,
  getStateNeededForFacetMetadata,
} from '../facet-set/facet-set-analytics-actions-utils';
import {
  facetIdDefinition,
  requiredNonEmptyString,
} from '../generic/facet-actions-validation';

interface CategoryFacetBreadcrumbPayload {
  categoryFacetId: string;
  categoryFacetPath: string[];
}

const categoryFacetBreadcrumbPayloadDefinition = {
  categoryFacetId: facetIdDefinition,
  categoryFacetPath: new ArrayValue({
    required: true,
    each: requiredNonEmptyString,
  }),
};

const getCategoryFacetMetadata = (
  state: Partial<SearchAppState>,
  {categoryFacetId, categoryFacetPath}: CategoryFacetBreadcrumbPayload
): CategoryFacetMetadata => {
  const facet = state.categoryFacetSet![categoryFacetId]!;
  const categoryFacetField = facet?.field;
  const categoryFacetTitle = `${categoryFacetField}_${categoryFacetId}`;
  return {
    categoryFacetId,
    categoryFacetPath,
    categoryFacetField,
    categoryFacetTitle,
  };
};

/**
 * Logs a category facet breadcrumb event.
 * @param payload (CategoryFacetBreadcrumbPayload) Object specifying the target facet and path.
 */
export const logCategoryFacetBreadcrumb = (
  payload: CategoryFacetBreadcrumbPayload
) =>
  makeAnalyticsAction(
    'analytics/facet/breadcrumb',
    AnalyticsType.Search,
    (client, state) => {
      validatePayload(payload, categoryFacetBreadcrumbPayloadDefinition);

      const facetState = buildFacetStateMetadata(
        getStateNeededForFacetMetadata(state)
      );

      return client.logBreadcrumbFacet(
        getCategoryFacetMetadata(state, payload),
        facetState
      );
    }
  )();