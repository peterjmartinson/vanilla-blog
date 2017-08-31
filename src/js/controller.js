/*jshint esversion:6, browser:true, node:true*/

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view  = view;
  }

  render() {
    this.view.render(this.model.getArticle());
  }

  setView(hash) {
    var validURL = /^#\/\S*$/.test(hash);

    if (validURL) {
      let matches = hash.match(/^#\/(\S*)$/),
          key    = matches[1];
      this.model.setArticle(key);
    }

    this.render();
  }
}
