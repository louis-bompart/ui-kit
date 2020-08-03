import {Component, Prop, State, h} from '@stencil/core';
import {
  DateFacet,
  buildDateFacet,
  DateFacetState,
  DateFacetOptions,
  DateFacetValue,
  Unsubscribe,
} from '@coveo/headless';
import {headlessEngine} from '../../engine';

@Component({
  tag: 'atomic-date-facet',
  styleUrl: 'atomic-date-facet.css',
  shadow: true,
})
export class AtomicDateFacet {
  @Prop() field = '';
  @Prop() label = 'No label';
  @State() state!: DateFacetState;

  private facet: DateFacet;
  private unsubscribe: Unsubscribe;

  constructor() {
    const options: DateFacetOptions = {
      field: this.field,
      generateAutomaticRanges: true,
    };

    this.facet = buildDateFacet(headlessEngine, {options});
    this.unsubscribe = this.facet.subscribe(() => this.updateState());
  }

  public disconnectedCallback() {
    this.unsubscribe();
  }

  private updateState() {
    this.state = this.facet.state;
  }

  private get values() {
    return this.state.values.map((listItem) => this.buildListItem(listItem));
  }

  private buildListItem(item: DateFacetValue) {
    const isSelected = this.facet.isValueSelected(item);

    return (
      <div onClick={() => this.facet.toggleSelect(item)}>
        <input type="checkbox" checked={isSelected}></input>
        <span>
          {item.start}-{item.end} {item.numberOfResults}
        </span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.label}</span>
        </div>
        <div>{this.values}</div>
      </div>
    );
  }
}
