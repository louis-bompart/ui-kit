/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Engine, HeadlessConfigurationOptions, Result, ResultTemplateCondition, } from "@coveo/headless";
export namespace Components {
    interface AtomicCategoryFacet {
        "field": string;
        "label": string;
    }
    interface AtomicComponentError {
        "error": Error;
    }
    interface AtomicDateFacet {
        "field": string;
        "label": string;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        "field": string;
        "label": string;
    }
    interface AtomicFieldCondition {
        "conditions": ResultTemplateCondition[];
        "getFields": () => Promise<string[]>;
        "ifDefined"?: string;
    }
    interface AtomicHistory {
    }
    interface AtomicNumericFacet {
        "field": string;
        "label": string;
    }
    interface AtomicPager {
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
    }
    interface AtomicResult {
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultList {
    }
    interface AtomicResultTemplate {
        "conditions": ResultTemplateCondition[];
        "fieldsToInclude"?: string;
        "getConditions": () => Promise<ResultTemplateCondition[]>;
        "getFields": () => Promise<string[]>;
    }
    interface AtomicResultValue {
        "value": string;
    }
    interface AtomicResultsPerPage {
    }
    interface AtomicSearchBox {
        "isStandalone": boolean;
        "numberOfSuggestions": number;
    }
    interface AtomicSearchInterface {
        "initialize": (options: Pick<HeadlessConfigurationOptions, "accessToken" | "organizationId" | "renewAccessToken" | "platformUrl">) => Promise<void>;
        "pipeline": string;
        "sample": boolean;
        "searchHub": string;
    }
    interface AtomicSortDropdown {
    }
    interface ChildComponent {
        "error"?: Error;
    }
    interface ChildComponent1 {
        "engine": Engine;
    }
    interface ChildComponentErrored {
        "engine": Engine;
        "error"?: Error;
    }
}
declare global {
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
    interface HTMLAtomicFieldConditionElement extends Components.AtomicFieldCondition, HTMLStencilElement {
    }
    var HTMLAtomicFieldConditionElement: {
        prototype: HTMLAtomicFieldConditionElement;
        new (): HTMLAtomicFieldConditionElement;
    };
    interface HTMLAtomicHistoryElement extends Components.AtomicHistory, HTMLStencilElement {
    }
    var HTMLAtomicHistoryElement: {
        prototype: HTMLAtomicHistoryElement;
        new (): HTMLAtomicHistoryElement;
    };
    interface HTMLAtomicNumericFacetElement extends Components.AtomicNumericFacet, HTMLStencilElement {
    }
    var HTMLAtomicNumericFacetElement: {
        prototype: HTMLAtomicNumericFacetElement;
        new (): HTMLAtomicNumericFacetElement;
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
    interface HTMLAtomicResultElement extends Components.AtomicResult, HTMLStencilElement {
    }
    var HTMLAtomicResultElement: {
        prototype: HTMLAtomicResultElement;
        new (): HTMLAtomicResultElement;
    };
    interface HTMLAtomicResultListElement extends Components.AtomicResultList, HTMLStencilElement {
    }
    var HTMLAtomicResultListElement: {
        prototype: HTMLAtomicResultListElement;
        new (): HTMLAtomicResultListElement;
    };
    interface HTMLAtomicResultTemplateElement extends Components.AtomicResultTemplate, HTMLStencilElement {
    }
    var HTMLAtomicResultTemplateElement: {
        prototype: HTMLAtomicResultTemplateElement;
        new (): HTMLAtomicResultTemplateElement;
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
    interface HTMLAtomicSortDropdownElement extends Components.AtomicSortDropdown, HTMLStencilElement {
    }
    var HTMLAtomicSortDropdownElement: {
        prototype: HTMLAtomicSortDropdownElement;
        new (): HTMLAtomicSortDropdownElement;
    };
    interface HTMLChildComponentElement extends Components.ChildComponent, HTMLStencilElement {
    }
    var HTMLChildComponentElement: {
        prototype: HTMLChildComponentElement;
        new (): HTMLChildComponentElement;
    };
    interface HTMLChildComponent1Element extends Components.ChildComponent1, HTMLStencilElement {
    }
    var HTMLChildComponent1Element: {
        prototype: HTMLChildComponent1Element;
        new (): HTMLChildComponent1Element;
    };
    interface HTMLChildComponentErroredElement extends Components.ChildComponentErrored, HTMLStencilElement {
    }
    var HTMLChildComponentErroredElement: {
        prototype: HTMLChildComponentErroredElement;
        new (): HTMLChildComponentErroredElement;
    };
    interface HTMLElementTagNameMap {
        "atomic-category-facet": HTMLAtomicCategoryFacetElement;
        "atomic-component-error": HTMLAtomicComponentErrorElement;
        "atomic-date-facet": HTMLAtomicDateFacetElement;
        "atomic-did-you-mean": HTMLAtomicDidYouMeanElement;
        "atomic-facet": HTMLAtomicFacetElement;
        "atomic-field-condition": HTMLAtomicFieldConditionElement;
        "atomic-history": HTMLAtomicHistoryElement;
        "atomic-numeric-facet": HTMLAtomicNumericFacetElement;
        "atomic-pager": HTMLAtomicPagerElement;
        "atomic-query-error": HTMLAtomicQueryErrorElement;
        "atomic-query-summary": HTMLAtomicQuerySummaryElement;
        "atomic-result": HTMLAtomicResultElement;
        "atomic-result-list": HTMLAtomicResultListElement;
        "atomic-result-template": HTMLAtomicResultTemplateElement;
        "atomic-result-value": HTMLAtomicResultValueElement;
        "atomic-results-per-page": HTMLAtomicResultsPerPageElement;
        "atomic-search-box": HTMLAtomicSearchBoxElement;
        "atomic-search-interface": HTMLAtomicSearchInterfaceElement;
        "atomic-sort-dropdown": HTMLAtomicSortDropdownElement;
        "child-component": HTMLChildComponentElement;
        "child-component-1": HTMLChildComponent1Element;
        "child-component-errored": HTMLChildComponentErroredElement;
    }
}
declare namespace LocalJSX {
    interface AtomicCategoryFacet {
        "field"?: string;
        "label"?: string;
    }
    interface AtomicComponentError {
        "error": Error;
    }
    interface AtomicDateFacet {
        "field"?: string;
        "label"?: string;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        "field"?: string;
        "label"?: string;
    }
    interface AtomicFieldCondition {
        "conditions"?: ResultTemplateCondition[];
        "ifDefined"?: string;
    }
    interface AtomicHistory {
    }
    interface AtomicNumericFacet {
        "field"?: string;
        "label"?: string;
    }
    interface AtomicPager {
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
    }
    interface AtomicResult {
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultList {
    }
    interface AtomicResultTemplate {
        "conditions"?: ResultTemplateCondition[];
        "fieldsToInclude"?: string;
    }
    interface AtomicResultValue {
        "value"?: string;
    }
    interface AtomicResultsPerPage {
    }
    interface AtomicSearchBox {
        "isStandalone"?: boolean;
        "numberOfSuggestions"?: number;
    }
    interface AtomicSearchInterface {
        "pipeline"?: string;
        "sample"?: boolean;
        "searchHub"?: string;
    }
    interface AtomicSortDropdown {
    }
    interface ChildComponent {
        "error"?: Error;
    }
    interface ChildComponent1 {
        "engine": Engine;
    }
    interface ChildComponentErrored {
        "engine": Engine;
        "error"?: Error;
    }
    interface IntrinsicElements {
        "atomic-category-facet": AtomicCategoryFacet;
        "atomic-component-error": AtomicComponentError;
        "atomic-date-facet": AtomicDateFacet;
        "atomic-did-you-mean": AtomicDidYouMean;
        "atomic-facet": AtomicFacet;
        "atomic-field-condition": AtomicFieldCondition;
        "atomic-history": AtomicHistory;
        "atomic-numeric-facet": AtomicNumericFacet;
        "atomic-pager": AtomicPager;
        "atomic-query-error": AtomicQueryError;
        "atomic-query-summary": AtomicQuerySummary;
        "atomic-result": AtomicResult;
        "atomic-result-list": AtomicResultList;
        "atomic-result-template": AtomicResultTemplate;
        "atomic-result-value": AtomicResultValue;
        "atomic-results-per-page": AtomicResultsPerPage;
        "atomic-search-box": AtomicSearchBox;
        "atomic-search-interface": AtomicSearchInterface;
        "atomic-sort-dropdown": AtomicSortDropdown;
        "child-component": ChildComponent;
        "child-component-1": ChildComponent1;
        "child-component-errored": ChildComponentErrored;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atomic-category-facet": LocalJSX.AtomicCategoryFacet & JSXBase.HTMLAttributes<HTMLAtomicCategoryFacetElement>;
            "atomic-component-error": LocalJSX.AtomicComponentError & JSXBase.HTMLAttributes<HTMLAtomicComponentErrorElement>;
            "atomic-date-facet": LocalJSX.AtomicDateFacet & JSXBase.HTMLAttributes<HTMLAtomicDateFacetElement>;
            "atomic-did-you-mean": LocalJSX.AtomicDidYouMean & JSXBase.HTMLAttributes<HTMLAtomicDidYouMeanElement>;
            "atomic-facet": LocalJSX.AtomicFacet & JSXBase.HTMLAttributes<HTMLAtomicFacetElement>;
            "atomic-field-condition": LocalJSX.AtomicFieldCondition & JSXBase.HTMLAttributes<HTMLAtomicFieldConditionElement>;
            "atomic-history": LocalJSX.AtomicHistory & JSXBase.HTMLAttributes<HTMLAtomicHistoryElement>;
            "atomic-numeric-facet": LocalJSX.AtomicNumericFacet & JSXBase.HTMLAttributes<HTMLAtomicNumericFacetElement>;
            "atomic-pager": LocalJSX.AtomicPager & JSXBase.HTMLAttributes<HTMLAtomicPagerElement>;
            "atomic-query-error": LocalJSX.AtomicQueryError & JSXBase.HTMLAttributes<HTMLAtomicQueryErrorElement>;
            "atomic-query-summary": LocalJSX.AtomicQuerySummary & JSXBase.HTMLAttributes<HTMLAtomicQuerySummaryElement>;
            "atomic-result": LocalJSX.AtomicResult & JSXBase.HTMLAttributes<HTMLAtomicResultElement>;
            "atomic-result-list": LocalJSX.AtomicResultList & JSXBase.HTMLAttributes<HTMLAtomicResultListElement>;
            "atomic-result-template": LocalJSX.AtomicResultTemplate & JSXBase.HTMLAttributes<HTMLAtomicResultTemplateElement>;
            "atomic-result-value": LocalJSX.AtomicResultValue & JSXBase.HTMLAttributes<HTMLAtomicResultValueElement>;
            "atomic-results-per-page": LocalJSX.AtomicResultsPerPage & JSXBase.HTMLAttributes<HTMLAtomicResultsPerPageElement>;
            "atomic-search-box": LocalJSX.AtomicSearchBox & JSXBase.HTMLAttributes<HTMLAtomicSearchBoxElement>;
            "atomic-search-interface": LocalJSX.AtomicSearchInterface & JSXBase.HTMLAttributes<HTMLAtomicSearchInterfaceElement>;
            "atomic-sort-dropdown": LocalJSX.AtomicSortDropdown & JSXBase.HTMLAttributes<HTMLAtomicSortDropdownElement>;
            "child-component": LocalJSX.ChildComponent & JSXBase.HTMLAttributes<HTMLChildComponentElement>;
            "child-component-1": LocalJSX.ChildComponent1 & JSXBase.HTMLAttributes<HTMLChildComponent1Element>;
            "child-component-errored": LocalJSX.ChildComponentErrored & JSXBase.HTMLAttributes<HTMLChildComponentErroredElement>;
        }
    }
}
