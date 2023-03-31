import { html, slotted } from '@microsoft/fast-element';
import { MyCard } from '.';

export const template = html<MyCard>`
  <template>
    <div @click=${(x,c) => x.handleTitleClick(c.event)}>
      <span class="title">${x => x.title}</span>
      <span class="time">${x => x.time}</span>
    </div>
    <div class="container" ?expanded="${x => x.expanded}">
      <slot class=content></slot>
    </div>
  </template>
`;
