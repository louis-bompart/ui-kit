import HeadlessPath from '@salesforce/resourceUrl/coveoheadless';
import AtomicPath from '@salesforce/resourceUrl/atomicutils';
import getHeadlessConfiguration from '@salesforce/apexContinuation/HeadlessController.getHeadlessConfiguration';

// @ts-ignore
import {loadScript} from 'lightning/platformResourceLoader';

const DEBOUNCE_DELAY = 200;
let timeout;

let headlessConfigPromise;
/**
 * Debounces a function execution.
 * @param {Function} func The function for which to delay execution.
 * @param {Number} wait The time to delay in milliseconds.
 */
const debounce = (func, wait) => {
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    timeout = setTimeout(later, wait);
  };
};

/**
 * Cancels the delayed search query.
 */
const cancelInitialSearch = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
};

/**
 * Dispatches search request.
 */
const executeInitialSearch = debounce(() => {
  window.coveoHeadless.engine.dispatch(
    CoveoHeadless.SearchActions.executeSearch(
      CoveoHeadless.AnalyticsActions.logInterfaceLoad()
    )
  );
}, DEBOUNCE_DELAY);

/**
 * Returns true if registered components are initialized, false otherwise.
 */
const getAreComponentsReady = () =>
  !window.coveoHeadless.components.find(
    (component) => component.initialized === false
  );

/**
 * Loads dependencies and returns an initialized Headless engine.
 * @param element
 */
async function initEngine(element) {
  await loadScript(element, HeadlessPath + '/browser/headless.js');
  await loadScript(element, AtomicPath + '/atomic-utils.js');

  /**
   * @type {import('../../../../../../headless/dist/index').HeadlessConfigurationOptions}
   */
  const config = JSON.parse(
    await (headlessConfigPromise || getHeadlessConfiguration())
  );
  const engine = new CoveoHeadless.HeadlessEngine({
    configuration: config,
    reducers: CoveoHeadless.searchAppReducers,
  });

  return engine;
}

/**
 * Registers a component for future initialization.
 * @param element
 */
function registerComponentForInit(element) {
  cancelInitialSearch();
  startFetchingHeadlessConfig();
  if (!window.coveoHeadless) {
    window.coveoHeadless = {
      components: [],
      engine: undefined,
    };
  }
  const isComponentRegistered = window.coveoHeadless.components.find(
    (component) => component.element === element
  );
  if (!isComponentRegistered) {
    window.coveoHeadless.components.push({
      element,
      initialized: false,
    });
  }
}

/**
 * Start fetching the headless config (token etc) by doing an Apex call,
 * if the call hasn't be made yet. Otherwise, do nothing.
 */
function startFetchingHeadlessConfig() {
  if (!headlessConfigPromise) {
    headlessConfigPromise = getHeadlessConfiguration();
  }
}

/**
 * Sets registered component to initialized.
 * @param element
 */
function setComponentInitialized(element) {
  const component = window.coveoHeadless
    ? window.coveoHeadless.components.find((comp) => comp.element === element)
    : undefined;
  if (!component) {
    console.log(
      'Fatal Error: Component was not registered before initialization.'
    );
    return;
  }
  component.initialized = true;
  if (getAreComponentsReady()) {
    executeInitialSearch();
  }
}

/**
 * Returns headless engine promise.
 * @param element
 */
function getHeadlessEngine(element) {
  if (!window.coveoHeadless.engine) {
    try {
      window.coveoHeadless.engine = initEngine(element);
      window.coveoHeadless.engine.then((engine) => {
        window.coveoHeadless.engine = engine;
      });
    } catch (error) {
      console.error('Fatal error: unable to initialize Coveo Headless', error);
    }
  }
  return Promise.resolve(window.coveoHeadless.engine);
}

export {
  executeInitialSearch,
  registerComponentForInit,
  setComponentInitialized,
  getHeadlessEngine,
};
