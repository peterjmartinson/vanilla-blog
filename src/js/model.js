/*jshint esversion:6, browser:true, node:true */

// Used to manipulate the data
export default class Model {
  constructor() {
    this.text = "DEFAULT TEXT";
  }

  setArticle(text) {
    this.text = text;
  }

  toJSON() {
    const text = this.text;
    return text;
  }

}
