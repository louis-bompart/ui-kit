/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CategoryFacetSortCriterion, Engine, FacetSortCriterion, LogLevel, Result, ResultTemplate, ResultTemplateCondition } from "@coveo/headless";
import { Bindings } from "./utils/initialization-utils";
import { i18n } from "i18next";
import { InitializationOptions } from "./components/atomic-search-interface/atomic-search-interface";
export namespace Components {
    interface AtomicBreadcrumbManager {
        "categoryDivider": string;
        "collapseThreshold": number;
    }
    interface AtomicCategoryFacet {
        /**
          * The character that separates values of a multi-value field
         */
        "delimitingCharacter": string;
        /**
          * Whether this facet should contain a search box.
         */
        "enableFacetSearch": boolean;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field": string;
        /**
          * The displayed label for the facet
         */
        "label": string;
        /**
          * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
         */
        "numberOfValues": number;
        /**
          * The sort criterion to apply to the returned facet values. Possible values are 'alphanumeric', and 'occurrences''.
         */
        "sortCriteria": CategoryFacetSortCriterion;
    }
    interface AtomicComponentError {
        "element": HTMLElement;
        "error": Error;
    }
    interface AtomicDateFacet {
        "facetId": string;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field": string;
        /**
          * Whether or not the index should automatically generate options for the facet
         */
        "generateAutomaticRanges": boolean;
        /**
          * The displayed label for the facet
         */
        "label": string;
    }
    interface AtomicDateRange {
        /**
          * The ending date for the range. It can be expressed as a Javascript date, as a number using epoch time or as a string using the ISO 8601 format
         */
        "end": Date | string | number;
        /**
          * Specifies whether or not the end date should be included in the range
         */
        "endInclusive": boolean;
        /**
          * The starting date for the range. It can be expressed as a Javascript date, as a number using epoch time or as a string using the ISO 8601 format
         */
        "start": Date | string | number;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        /**
          * The character that separates values of a multi-value field.
         */
        "delimitingCharacter": string;
        /**
          * Whether this facet should contain a search box.
         */
        "enableFacetSearch": boolean;
        /**
          * The field whose values you want to display in the facet.
         */
        "field": string;
        /**
          * The displayed label for the facet.
         */
        "label": string;
        /**
          * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
         */
        "numberOfValues": number;
        /**
          * The sort criterion to apply to the returned facet values. Possible values are 'score', 'numeric', 'occurrences', and 'automatic'.
         */
        "sortCriteria": FacetSortCriterion;
    }
    interface AtomicFacetManager {
    }
    interface AtomicFieldCondition {
        "conditions": ResultTemplateCondition[];
        "ifDefined"?: string;
        "ifNotDefined"?: string;
    }
    interface AtomicFrequentlyBoughtTogether {
    }
    interface AtomicHistory {
    }
    interface AtomicNoResults {
        /**
          * Whether to display a button which cancels the last available action.
         */
        "enableCancelLastAction": boolean;
        /**
          * Whether to display a list of search tips to the user.
         */
        "enableSearchTips": boolean;
    }
    interface AtomicNumericFacet {
        "facetId": string;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field": string;
        /**
          * Whether or not the index should automatically generate options for the facet
         */
        "generateAutomaticRanges": boolean;
        /**
          * The displayed label for the facet
         */
        "label": string;
    }
    interface AtomicNumericRange {
        /**
          * The ending value for the numeric range
         */
        "end": number;
        /**
          * Specifies whether or not the end value should be included in the range
         */
        "endInclusive": boolean;
        /**
          * The starting value for the numeric range
         */
        "start": number;
    }
    interface AtomicPager {
        /**
          * Specifies whether the **Previous** and **Next** buttons should appear at each end of the pager when appropriate.
         */
        "enableNavigationButtons": boolean;
        /**
          * Specifies how many page buttons to display in the pager.
         */
        "numberOfPages": number;
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
        /**
          * Whether to display the duration of the last query execution.
         */
        "enableDuration": boolean;
    }
    interface AtomicRelevanceInspector {
        "bindings": Bindings;
    }
    interface AtomicResult {
        "content": string;
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultExcerpt {
    }
    interface AtomicResultLink {
    }
    interface AtomicResultList {
        /**
          * A list of fields to include in the query results, separated by commas.
         */
        "fieldsToInclude": string;
    }
    interface AtomicResultListPlaceholder {
    }
    interface AtomicResultTemplate {
        "conditions": ResultTemplateCondition[];
        "getTemplate": () => Promise<ResultTemplate<string> | null>;
    }
    interface AtomicResultUri {
    }
    interface AtomicResultValue {
        /**
          * Which highlight should the value be highlighted with
         */
        "shouldHighlightWith"?: string;
        /**
          * Which result value should the component render
         */
        "value": string;
    }
    interface AtomicResultsPerPage {
        /**
          * List of possible results per page choices, separated by commas.
         */
        "choicesDisplayed": string;
        /**
          * Initial choice for the number of result per page. Should be part of the `choicesDisplayed` option. By default, the first value of choices displayed.
         */
        "initialChoice"?: number;
    }
    interface AtomicSearchBox {
        "_id": string;
        /**
          * Whether the submit button should be placed before the input
         */
        "leadingSubmitButton": boolean;
        /**
          * Maximum number of suggestions to display
         */
        "numberOfSuggestions": number;
        /**
          * The placeholder for the search box input
         */
        "placeholder": string;
    }
    interface AtomicSearchInterface {
        "engine"?: Engine;
        "executeFirstSearch": () => Promise<void>;
        "i18n": i18n;
        "initialize": (options: InitializationOptions) => Promise<void>;
        "language": string;
        "logLevel"?: LogLevel;
        "pipeline": string;
        "reflectStateInUrl": boolean;
        "searchHub": string;
    }
    interface AtomicSortCriteria {
        /**
          * The non-localized caption to display for this criteria.
         */
        "caption": string;
        /**
          * The sort criterion/criteria the end user can select/toggle between.  The available sort criteria are: - `relevancy` - `date ascending`/`date descending` - `qre` - `field ascending`/`field descending`, where you must replace `field` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).  You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"` ).
         */
        "criteria": string;
    }
    interface AtomicSortDropdown {
    }
    interface AtomicTab {
        "expression": string;
        "isActive": boolean;
    }
    interface AtomicText {
        /**
          * Count value used for plurals
         */
        "count"?: number;
        /**
          * String key value
         */
        "value": string;
    }
}
declare global {
    interface HTMLAtomicBreadcrumbManagerElement extends Components.AtomicBreadcrumbManager, HTMLStencilElement {
    }
    var HTMLAtomicBreadcrumbManagerElement: {
        prototype: HTMLAtomicBreadcrumbManagerElement;
        new (): HTMLAtomicBreadcrumbManagerElement;
    };
    interface HTMLAtomicCategoryFacetElement extends Components.AtomicCategoryFacet, HTMLStencilElement {
    }
    var HTMLAtomicCategoryFacetElement: {
        prototype: HTMLAtomicCategoryFacetElement;
        new (): HTMLAtomicCategoryFacetElement;
    };
    interface HTMLAtomicComponentErrorElement extends Components.AtomicComponentError, HTMLStencilElement {
    }
    var HTMLAtomicComponentErrorElement: {
        prototype: HTMLAtomicComponentErrorElement;
        new (): HTMLAtomicComponentErrorElement;
    };
    interface HTMLAtomicDateFacetElement extends Components.AtomicDateFacet, HTMLStencilElement {
    }
    var HTMLAtomicDateFacetElement: {
        prototype: HTMLAtomicDateFacetElement;
        new (): HTMLAtomicDateFacetElement;
    };
    interface HTMLAtomicDateRangeElement extends Components.AtomicDateRange, HTMLStencilElement {
    }
    var HTMLAtomicDateRangeElement: {
        prototype: HTMLAtomicDateRangeElement;
        new (): HTMLAtomicDateRangeElement;
    };
    interface HTMLAtomicDidYouMeanElement extends Components.AtomicDidYouMean, HTMLStencilElement {
    }
    var HTMLAtomicDidYouMeanElement: {
        prototype: HTMLAtomicDidYouMeanElement;
        new (): HTMLAtomicDidYouMeanElement;
    };
    interface HTMLAtomicFacetElement extends Components.AtomicFacet, HTMLStencilElement {
    }
    var HTMLAtomicFacetElement: {
        prototype: HTMLAtomicFacetElement;
        new (): HTMLAtomicFacetElement;
    };
    interface HTMLAtomicFacetManagerElement extends Components.AtomicFacetManager, HTMLStencilElement {
    }
    var HTMLAtomicFacetManagerElement: {
        prototype: HTMLAtomicFacetManagerElement;
        new (): HTMLAtomicFacetManagerElement;
    };
    interface HTMLAtomicFieldConditionElement extends Components.AtomicFieldCondition, HTMLStencilElement {
    }
    var HTMLAtomicFieldConditionElement: {
        prototype: HTMLAtomicFieldConditionElement;
        new (): HTMLAtomicFieldConditionElement;
    };
    interface HTMLAtomicFrequentlyBoughtTogetherElement extends Components.AtomicFrequentlyBoughtTogether, HTMLStencilElement {
    }
    var HTMLAtomicFrequentlyBoughtTogetherElement: {
        prototype: HTMLAtomicFrequentlyBoughtTogetherElement;
        new (): HTMLAtomicFrequentlyBoughtTogetherElement;
    };
    interface HTMLAtomicHistoryElement extends Components.AtomicHistory, HTMLStencilElement {
    }
    var HTMLAtomicHistoryElement: {
        prototype: HTMLAtomicHistoryElement;
        new (): HTMLAtomicHistoryElement;
    };
    interface HTMLAtomicNoResultsElement extends Components.AtomicNoResults, HTMLStencilElement {
    }
    var HTMLAtomicNoResultsElement: {
        prototype: HTMLAtomicNoResultsElement;
        new (): HTMLAtomicNoResultsElement;
    };
    interface HTMLAtomicNumericFacetElement extends Components.AtomicNumericFacet, HTMLStencilElement {
    }
    var HTMLAtomicNumericFacetElement: {
        prototype: HTMLAtomicNumericFacetElement;
        new (): HTMLAtomicNumericFacetElement;
    };
    interface HTMLAtomicNumericRangeElement extends Components.AtomicNumericRange, HTMLStencilElement {
    }
    var HTMLAtomicNumericRangeElement: {
        prototype: HTMLAtomicNumericRangeElement;
        new (): HTMLAtomicNumericRangeElement;
    };
    interface HTMLAtomicPagerElement extends Components.AtomicPager, HTMLStencilElement {
    }
    var HTMLAtomicPagerElement: {
        prototype: HTMLAtomicPagerElement;
        new (): HTMLAtomicPagerElement;
    };
    interface HTMLAtomicQueryErrorElement extends Components.AtomicQueryError, HTMLStencilElement {
    }
    var HTMLAtomicQueryErrorElement: {
        prototype: HTMLAtomicQueryErrorElement;
        new (): HTMLAtomicQueryErrorElement;
    };
    interface HTMLAtomicQuerySummaryElement extends Components.AtomicQuerySummary, HTMLStencilElement {
    }
    var HTMLAtomicQuerySummaryElement: {
        prototype: HTMLAtomicQuerySummaryElement;
        new (): HTMLAtomicQuerySummaryElement;
    };
    interface HTMLAtomicRelevanceInspectorElement extends Components.AtomicRelevanceInspector, HTMLStencilElement {
    }
    var HTMLAtomicRelevanceInspectorElement: {
        prototype: HTMLAtomicRelevanceInspectorElement;
        new (): HTMLAtomicRelevanceInspectorElement;
    };
    interface HTMLAtomicResultElement extends Components.AtomicResult, HTMLStencilElement {
    }
    var HTMLAtomicResultElement: {
        prototype: HTMLAtomicResultElement;
        new (): HTMLAtomicResultElement;
    };
    interface HTMLAtomicResultExcerptElement extends Components.AtomicResultExcerpt, HTMLStencilElement {
    }
    var HTMLAtomicResultExcerptElement: {
        prototype: HTMLAtomicResultExcerptElement;
        new (): HTMLAtomicResultExcerptElement;
    };
    interface HTMLAtomicResultLinkElement extends Components.AtomicResultLink, HTMLStencilElement {
    }
    var HTMLAtomicResultLinkElement: {
        prototype: HTMLAtomicResultLinkElement;
        new (): HTMLAtomicResultLinkElement;
    };
    interface HTMLAtomicResultListElement extends Components.AtomicResultList, HTMLStencilElement {
    }
    var HTMLAtomicResultListElement: {
        prototype: HTMLAtomicResultListElement;
        new (): HTMLAtomicResultListElement;
    };
    interface HTMLAtomicResultListPlaceholderElement extends Components.AtomicResultListPlaceholder, HTMLStencilElement {
    }
    var HTMLAtomicResultListPlaceholderElement: {
        prototype: HTMLAtomicResultListPlaceholderElement;
        new (): HTMLAtomicResultListPlaceholderElement;
    };
    interface HTMLAtomicResultTemplateElement extends Components.AtomicResultTemplate, HTMLStencilElement {
    }
    var HTMLAtomicResultTemplateElement: {
        prototype: HTMLAtomicResultTemplateElement;
        new (): HTMLAtomicResultTemplateElement;
    };
    interface HTMLAtomicResultUriElement extends Components.AtomicResultUri, HTMLStencilElement {
    }
    var HTMLAtomicResultUriElement: {
        prototype: HTMLAtomicResultUriElement;
        new (): HTMLAtomicResultUriElement;
    };
    interface HTMLAtomicResultValueElement extends Components.AtomicResultValue, HTMLStencilElement {
    }
    var HTMLAtomicResultValueElement: {
        prototype: HTMLAtomicResultValueElement;
        new (): HTMLAtomicResultValueElement;
    };
    interface HTMLAtomicResultsPerPageElement extends Components.AtomicResultsPerPage, HTMLStencilElement {
    }
    var HTMLAtomicResultsPerPageElement: {
        prototype: HTMLAtomicResultsPerPageElement;
        new (): HTMLAtomicResultsPerPageElement;
    };
    interface HTMLAtomicSearchBoxElement extends Components.AtomicSearchBox, HTMLStencilElement {
    }
    var HTMLAtomicSearchBoxElement: {
        prototype: HTMLAtomicSearchBoxElement;
        new (): HTMLAtomicSearchBoxElement;
    };
    interface HTMLAtomicSearchInterfaceElement extends Components.AtomicSearchInterface, HTMLStencilElement {
    }
    var HTMLAtomicSearchInterfaceElement: {
        prototype: HTMLAtomicSearchInterfaceElement;
        new (): HTMLAtomicSearchInterfaceElement;
    };
    interface HTMLAtomicSortCriteriaElement extends Components.AtomicSortCriteria, HTMLStencilElement {
    }
    var HTMLAtomicSortCriteriaElement: {
        prototype: HTMLAtomicSortCriteriaElement;
        new (): HTMLAtomicSortCriteriaElement;
    };
    interface HTMLAtomicSortDropdownElement extends Components.AtomicSortDropdown, HTMLStencilElement {
    }
    var HTMLAtomicSortDropdownElement: {
        prototype: HTMLAtomicSortDropdownElement;
        new (): HTMLAtomicSortDropdownElement;
    };
    interface HTMLAtomicTabElement extends Components.AtomicTab, HTMLStencilElement {
    }
    var HTMLAtomicTabElement: {
        prototype: HTMLAtomicTabElement;
        new (): HTMLAtomicTabElement;
    };
    interface HTMLAtomicTextElement extends Components.AtomicText, HTMLStencilElement {
    }
    var HTMLAtomicTextElement: {
        prototype: HTMLAtomicTextElement;
        new (): HTMLAtomicTextElement;
    };
    interface HTMLElementTagNameMap {
        "atomic-breadcrumb-manager": HTMLAtomicBreadcrumbManagerElement;
        "atomic-category-facet": HTMLAtomicCategoryFacetElement;
        "atomic-component-error": HTMLAtomicComponentErrorElement;
        "atomic-date-facet": HTMLAtomicDateFacetElement;
        "atomic-date-range": HTMLAtomicDateRangeElement;
        "atomic-did-you-mean": HTMLAtomicDidYouMeanElement;
        "atomic-facet": HTMLAtomicFacetElement;
        "atomic-facet-manager": HTMLAtomicFacetManagerElement;
        "atomic-field-condition": HTMLAtomicFieldConditionElement;
        "atomic-frequently-bought-together": HTMLAtomicFrequentlyBoughtTogetherElement;
        "atomic-history": HTMLAtomicHistoryElement;
        "atomic-no-results": HTMLAtomicNoResultsElement;
        "atomic-numeric-facet": HTMLAtomicNumericFacetElement;
        "atomic-numeric-range": HTMLAtomicNumericRangeElement;
        "atomic-pager": HTMLAtomicPagerElement;
        "atomic-query-error": HTMLAtomicQueryErrorElement;
        "atomic-query-summary": HTMLAtomicQuerySummaryElement;
        "atomic-relevance-inspector": HTMLAtomicRelevanceInspectorElement;
        "atomic-result": HTMLAtomicResultElement;
        "atomic-result-excerpt": HTMLAtomicResultExcerptElement;
        "atomic-result-link": HTMLAtomicResultLinkElement;
        "atomic-result-list": HTMLAtomicResultListElement;
        "atomic-result-list-placeholder": HTMLAtomicResultListPlaceholderElement;
        "atomic-result-template": HTMLAtomicResultTemplateElement;
        "atomic-result-uri": HTMLAtomicResultUriElement;
        "atomic-result-value": HTMLAtomicResultValueElement;
        "atomic-results-per-page": HTMLAtomicResultsPerPageElement;
        "atomic-search-box": HTMLAtomicSearchBoxElement;
        "atomic-search-interface": HTMLAtomicSearchInterfaceElement;
        "atomic-sort-criteria": HTMLAtomicSortCriteriaElement;
        "atomic-sort-dropdown": HTMLAtomicSortDropdownElement;
        "atomic-tab": HTMLAtomicTabElement;
        "atomic-text": HTMLAtomicTextElement;
    }
}
declare namespace LocalJSX {
    interface AtomicBreadcrumbManager {
        "categoryDivider"?: string;
        "collapseThreshold"?: number;
    }
    interface AtomicCategoryFacet {
        /**
          * The character that separates values of a multi-value field
         */
        "delimitingCharacter"?: string;
        /**
          * Whether this facet should contain a search box.
         */
        "enableFacetSearch"?: boolean;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field"?: string;
        /**
          * The displayed label for the facet
         */
        "label"?: string;
        /**
          * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
         */
        "numberOfValues"?: number;
        /**
          * The sort criterion to apply to the returned facet values. Possible values are 'alphanumeric', and 'occurrences''.
         */
        "sortCriteria"?: CategoryFacetSortCriterion;
    }
    interface AtomicComponentError {
        "element": HTMLElement;
        "error": Error;
    }
    interface AtomicDateFacet {
        "facetId"?: string;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field"?: string;
        /**
          * Whether or not the index should automatically generate options for the facet
         */
        "generateAutomaticRanges"?: boolean;
        /**
          * The displayed label for the facet
         */
        "label"?: string;
    }
    interface AtomicDateRange {
        /**
          * The ending date for the range. It can be expressed as a Javascript date, as a number using epoch time or as a string using the ISO 8601 format
         */
        "end": Date | string | number;
        /**
          * Specifies whether or not the end date should be included in the range
         */
        "endInclusive"?: boolean;
        /**
          * The starting date for the range. It can be expressed as a Javascript date, as a number using epoch time or as a string using the ISO 8601 format
         */
        "start": Date | string | number;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        /**
          * The character that separates values of a multi-value field.
         */
        "delimitingCharacter"?: string;
        /**
          * Whether this facet should contain a search box.
         */
        "enableFacetSearch"?: boolean;
        /**
          * The field whose values you want to display in the facet.
         */
        "field"?: string;
        /**
          * The displayed label for the facet.
         */
        "label"?: string;
        /**
          * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
         */
        "numberOfValues"?: number;
        /**
          * The sort criterion to apply to the returned facet values. Possible values are 'score', 'numeric', 'occurrences', and 'automatic'.
         */
        "sortCriteria"?: FacetSortCriterion;
    }
    interface AtomicFacetManager {
    }
    interface AtomicFieldCondition {
        "conditions"?: ResultTemplateCondition[];
        "ifDefined"?: string;
        "ifNotDefined"?: string;
    }
    interface AtomicFrequentlyBoughtTogether {
    }
    interface AtomicHistory {
    }
    interface AtomicNoResults {
        /**
          * Whether to display a button which cancels the last available action.
         */
        "enableCancelLastAction"?: boolean;
        /**
          * Whether to display a list of search tips to the user.
         */
        "enableSearchTips"?: boolean;
    }
    interface AtomicNumericFacet {
        "facetId"?: string;
        /**
          * Specifies the index field whose values the facet should use
         */
        "field"?: string;
        /**
          * Whether or not the index should automatically generate options for the facet
         */
        "generateAutomaticRanges"?: boolean;
        /**
          * The displayed label for the facet
         */
        "label"?: string;
    }
    interface AtomicNumericRange {
        /**
          * The ending value for the numeric range
         */
        "end": number;
        /**
          * Specifies whether or not the end value should be included in the range
         */
        "endInclusive"?: boolean;
        /**
          * The starting value for the numeric range
         */
        "start": number;
    }
    interface AtomicPager {
        /**
          * Specifies whether the **Previous** and **Next** buttons should appear at each end of the pager when appropriate.
         */
        "enableNavigationButtons"?: boolean;
        /**
          * Specifies how many page buttons to display in the pager.
         */
        "numberOfPages"?: number;
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
        /**
          * Whether to display the duration of the last query execution.
         */
        "enableDuration"?: boolean;
    }
    interface AtomicRelevanceInspector {
        "bindings": Bindings;
    }
    interface AtomicResult {
        "content": string;
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultExcerpt {
    }
    interface AtomicResultLink {
    }
    interface AtomicResultList {
        /**
          * A list of fields to include in the query results, separated by commas.
         */
        "fieldsToInclude"?: string;
    }
    interface AtomicResultListPlaceholder {
    }
    interface AtomicResultTemplate {
        "conditions"?: ResultTemplateCondition[];
    }
    interface AtomicResultUri {
    }
    interface AtomicResultValue {
        /**
          * Which highlight should the value be highlighted with
         */
        "shouldHighlightWith"?: string;
        /**
          * Which result value should the component render
         */
        "value": string;
    }
    interface AtomicResultsPerPage {
        /**
          * List of possible results per page choices, separated by commas.
         */
        "choicesDisplayed"?: string;
        /**
          * Initial choice for the number of result per page. Should be part of the `choicesDisplayed` option. By default, the first value of choices displayed.
         */
        "initialChoice"?: number;
    }
    interface AtomicSearchBox {
        "_id"?: string;
        /**
          * Whether the submit button should be placed before the input
         */
        "leadingSubmitButton"?: boolean;
        /**
          * Maximum number of suggestions to display
         */
        "numberOfSuggestions"?: number;
        /**
          * The placeholder for the search box input
         */
        "placeholder"?: string;
    }
    interface AtomicSearchInterface {
        "engine"?: Engine;
        "i18n"?: i18n;
        "language"?: string;
        "logLevel"?: LogLevel;
        "pipeline"?: string;
        "reflectStateInUrl"?: boolean;
        "searchHub"?: string;
    }
    interface AtomicSortCriteria {
        /**
          * The non-localized caption to display for this criteria.
         */
        "caption": string;
        /**
          * The sort criterion/criteria the end user can select/toggle between.  The available sort criteria are: - `relevancy` - `date ascending`/`date descending` - `qre` - `field ascending`/`field descending`, where you must replace `field` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).  You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"` ).
         */
        "criteria": string;
    }
    interface AtomicSortDropdown {
    }
    interface AtomicTab {
        "expression"?: string;
        "isActive"?: boolean;
    }
    interface AtomicText {
        /**
          * Count value used for plurals
         */
        "count"?: number;
        /**
          * String key value
         */
        "value": string;
    }
    interface IntrinsicElements {
        "atomic-breadcrumb-manager": AtomicBreadcrumbManager;
        "atomic-category-facet": AtomicCategoryFacet;
        "atomic-component-error": AtomicComponentError;
        "atomic-date-facet": AtomicDateFacet;
        "atomic-date-range": AtomicDateRange;
        "atomic-did-you-mean": AtomicDidYouMean;
        "atomic-facet": AtomicFacet;
        "atomic-facet-manager": AtomicFacetManager;
        "atomic-field-condition": AtomicFieldCondition;
        "atomic-frequently-bought-together": AtomicFrequentlyBoughtTogether;
        "atomic-history": AtomicHistory;
        "atomic-no-results": AtomicNoResults;
        "atomic-numeric-facet": AtomicNumericFacet;
        "atomic-numeric-range": AtomicNumericRange;
        "atomic-pager": AtomicPager;
        "atomic-query-error": AtomicQueryError;
        "atomic-query-summary": AtomicQuerySummary;
        "atomic-relevance-inspector": AtomicRelevanceInspector;
        "atomic-result": AtomicResult;
        "atomic-result-excerpt": AtomicResultExcerpt;
        "atomic-result-link": AtomicResultLink;
        "atomic-result-list": AtomicResultList;
        "atomic-result-list-placeholder": AtomicResultListPlaceholder;
        "atomic-result-template": AtomicResultTemplate;
        "atomic-result-uri": AtomicResultUri;
        "atomic-result-value": AtomicResultValue;
        "atomic-results-per-page": AtomicResultsPerPage;
        "atomic-search-box": AtomicSearchBox;
        "atomic-search-interface": AtomicSearchInterface;
        "atomic-sort-criteria": AtomicSortCriteria;
        "atomic-sort-dropdown": AtomicSortDropdown;
        "atomic-tab": AtomicTab;
        "atomic-text": AtomicText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atomic-breadcrumb-manager": LocalJSX.AtomicBreadcrumbManager & JSXBase.HTMLAttributes<HTMLAtomicBreadcrumbManagerElement>;
            "atomic-category-facet": LocalJSX.AtomicCategoryFacet & JSXBase.HTMLAttributes<HTMLAtomicCategoryFacetElement>;
            "atomic-component-error": LocalJSX.AtomicComponentError & JSXBase.HTMLAttributes<HTMLAtomicComponentErrorElement>;
            "atomic-date-facet": LocalJSX.AtomicDateFacet & JSXBase.HTMLAttributes<HTMLAtomicDateFacetElement>;
            "atomic-date-range": LocalJSX.AtomicDateRange & JSXBase.HTMLAttributes<HTMLAtomicDateRangeElement>;
            "atomic-did-you-mean": LocalJSX.AtomicDidYouMean & JSXBase.HTMLAttributes<HTMLAtomicDidYouMeanElement>;
            "atomic-facet": LocalJSX.AtomicFacet & JSXBase.HTMLAttributes<HTMLAtomicFacetElement>;
            "atomic-facet-manager": LocalJSX.AtomicFacetManager & JSXBase.HTMLAttributes<HTMLAtomicFacetManagerElement>;
            "atomic-field-condition": LocalJSX.AtomicFieldCondition & JSXBase.HTMLAttributes<HTMLAtomicFieldConditionElement>;
            "atomic-frequently-bought-together": LocalJSX.AtomicFrequentlyBoughtTogether & JSXBase.HTMLAttributes<HTMLAtomicFrequentlyBoughtTogetherElement>;
            "atomic-history": LocalJSX.AtomicHistory & JSXBase.HTMLAttributes<HTMLAtomicHistoryElement>;
            "atomic-no-results": LocalJSX.AtomicNoResults & JSXBase.HTMLAttributes<HTMLAtomicNoResultsElement>;
            "atomic-numeric-facet": LocalJSX.AtomicNumericFacet & JSXBase.HTMLAttributes<HTMLAtomicNumericFacetElement>;
            "atomic-numeric-range": LocalJSX.AtomicNumericRange & JSXBase.HTMLAttributes<HTMLAtomicNumericRangeElement>;
            "atomic-pager": LocalJSX.AtomicPager & JSXBase.HTMLAttributes<HTMLAtomicPagerElement>;
            "atomic-query-error": LocalJSX.AtomicQueryError & JSXBase.HTMLAttributes<HTMLAtomicQueryErrorElement>;
            "atomic-query-summary": LocalJSX.AtomicQuerySummary & JSXBase.HTMLAttributes<HTMLAtomicQuerySummaryElement>;
            "atomic-relevance-inspector": LocalJSX.AtomicRelevanceInspector & JSXBase.HTMLAttributes<HTMLAtomicRelevanceInspectorElement>;
            "atomic-result": LocalJSX.AtomicResult & JSXBase.HTMLAttributes<HTMLAtomicResultElement>;
            "atomic-result-excerpt": LocalJSX.AtomicResultExcerpt & JSXBase.HTMLAttributes<HTMLAtomicResultExcerptElement>;
            "atomic-result-link": LocalJSX.AtomicResultLink & JSXBase.HTMLAttributes<HTMLAtomicResultLinkElement>;
            "atomic-result-list": LocalJSX.AtomicResultList & JSXBase.HTMLAttributes<HTMLAtomicResultListElement>;
            "atomic-result-list-placeholder": LocalJSX.AtomicResultListPlaceholder & JSXBase.HTMLAttributes<HTMLAtomicResultListPlaceholderElement>;
            "atomic-result-template": LocalJSX.AtomicResultTemplate & JSXBase.HTMLAttributes<HTMLAtomicResultTemplateElement>;
            "atomic-result-uri": LocalJSX.AtomicResultUri & JSXBase.HTMLAttributes<HTMLAtomicResultUriElement>;
            "atomic-result-value": LocalJSX.AtomicResultValue & JSXBase.HTMLAttributes<HTMLAtomicResultValueElement>;
            "atomic-results-per-page": LocalJSX.AtomicResultsPerPage & JSXBase.HTMLAttributes<HTMLAtomicResultsPerPageElement>;
            "atomic-search-box": LocalJSX.AtomicSearchBox & JSXBase.HTMLAttributes<HTMLAtomicSearchBoxElement>;
            "atomic-search-interface": LocalJSX.AtomicSearchInterface & JSXBase.HTMLAttributes<HTMLAtomicSearchInterfaceElement>;
            "atomic-sort-criteria": LocalJSX.AtomicSortCriteria & JSXBase.HTMLAttributes<HTMLAtomicSortCriteriaElement>;
            "atomic-sort-dropdown": LocalJSX.AtomicSortDropdown & JSXBase.HTMLAttributes<HTMLAtomicSortDropdownElement>;
            "atomic-tab": LocalJSX.AtomicTab & JSXBase.HTMLAttributes<HTMLAtomicTabElement>;
            "atomic-text": LocalJSX.AtomicText & JSXBase.HTMLAttributes<HTMLAtomicTextElement>;
        }
    }
}
