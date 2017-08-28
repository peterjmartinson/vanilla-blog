/*jshint esversion:6, browser:true, node:true*/
/* Note, *calendar* is special to the tutorial, not the blog*/

import { calendar } from './template';

export default class View {
  constructor() {
    this.el = document.getElementById('target');
  }

  render(data) {
    this.el.innerHTML = calendar(data);
  }
}
