/*jshint esversion:6, browser:true, node:true*/

import { article } from './template';

export default class View {
  constructor() {
    this.el = document.getElementById('target');
  }

  render(data) {
    this.el.innerHTML = article(data);
  }
}
