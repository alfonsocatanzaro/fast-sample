import { FASTElement, customElement, html, attr, ref, css } from '@microsoft/fast-element';

const template = html<MySearch>`
  <label>
    ${x => x.label}
    <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
  </label>
  <button @click="${x => x.buttonClickHandler()}">
    <slot>Search</slot>
  </button>
`

const style = css`
  :host {
    --font-size: 1rem;
    --padding: 0.25rem;

    font-size: var(--font-size);
    display: block;
  }

  input {
    font-size: var(--font-size);
    padding: var(--padding);
  }

  button {
    cursor: pointer;
    font-size: var(--font-size);
    padding: var(--padding);
  }
`
/**
 * @tag my-search
 * 
 * @summary This is a search component
 *
 * @attr {string} label - the label associated with the search field
 * 
 * @slot default - content displayed in the search button
 *
 * @cssprop [--font-size=1rem] - Controls the font size for all elements in the component
 * @cssprop [--padding=0.25rem] - Controls the padding for the `input` and `button` elements
 * 
 */
@customElement({
  name: 'my-search',
  template: template,
  styles: style
})
export class MySearch extends FASTElement{
  @attr label: string = 'My Search';
  searchInput: HTMLInputElement;

  public searchHandler(){
    this.$emit('find', this.searchInput.value);
  }

  public buttonClickHandler(){
    this.$emit('find', this.searchInput.value);
  }

}