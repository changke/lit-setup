import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-bar')
export class Bar extends LitElement {
  static styles = css`
    :host {
      contain: content;
    }
    li {
      list-style: square;
      color: darkorchid;
    }
  `;

  @property({
    converter: {
      fromAttribute: (value: string | null) => value ? value.split(',') : [],
      toAttribute: (value: string[]) => value.join(',')
    }
  })
  items: string[] = [];

  render() {
    return html`
      <ul>
        ${this.items.map((i, idx) => html`<li class="top${(idx + 1).toString()}">${i.trim()}</li>`)}
      </ul>
    `;
  }
}
