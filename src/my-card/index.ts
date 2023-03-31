import { attr, customElement, FASTElement, observable } from '@microsoft/fast-element';
import { template } from './my-card.template';
import { styles } from './my-card.styles';

@customElement({
  name: 'my-card',
  template,
  styles
})
export class MyCard extends FASTElement{
  @attr title:string = "Card title";
  @attr({ mode: 'boolean' }) expanded: boolean = true;
  @observable time: string = "";
 
  constructor (){
    super();
    setInterval(() => {
      const date = new Date();
      this.time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }, 1000);
  }

  handleTitleClick(_: Event){
    this.expanded = !this.expanded;
  }

}