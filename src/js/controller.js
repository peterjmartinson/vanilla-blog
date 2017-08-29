/*jshint esversion:6, browser:true, node:true*/

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view  = view;
  }

  render() {
    this.view.render(this.model.toJSON());
  }

  setView(hash) {
    var validURL = /^#\/\S*$/.test(hash);

    if (validURL) {
      let matches = hash.match(/^#\/(\S*)$/),
          text    = matches[1];
      this.model.setArticle(text);
    }

    this.render();
  }
}
