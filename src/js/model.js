/*jshint esversion:6, browser:true, node:true */

// Used to manipulate the data
export default class Model {
  constructor() {
    this.text = "DEFAULT TEXT";
  }

  setArticle(key) {
    this.text = toc[key];
  }

  getArticle() {
    return this.text;
  }

}

// don't like that this needs to be a global...
var toc = {
  view1 : "This is from View 1",
  view2 : "This IS from View 2",
  view3 : "This were from View 3",
  view4 : "This WERE from View 4"
};
