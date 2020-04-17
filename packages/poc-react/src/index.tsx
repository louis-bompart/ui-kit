import './index.css';
import Searchbox from './components/searchbox';
import Results from './components/results';
import { CoveoHeadlessEngine } from 'coveo-headless-engine';

export const coveoHeadlessEngine = new CoveoHeadlessEngine();
coveoHeadlessEngine.performSearch();

customElements.define('coveo-searchbox', Searchbox);
customElements.define('coveo-results', Results);