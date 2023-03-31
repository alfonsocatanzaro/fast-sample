import { css } from '@microsoft/fast-element';

export const styles = css`
  
  :host {
    border: 1px solid black;
    display: block;
  }

  .title{
    font-weight: bold;
  }
  .time{
    float: right;
  }

  .container[expanded]{
    height: 100px;  
    border-top: 1px solid black;
  }

  .container{
    height: 0px;  
    overflow: hidden;
    border-top: 0px;
  }
 
`;
