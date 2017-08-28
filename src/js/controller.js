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
    var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
      // note, this is for urls like '#/01/2017'

    if (validURL) {
      let matches = hash.match(/^#\/([\d]{2})\/([\d]{4})$/),
          month   = parseInt(matches[1], 10) - 1,
          year    = parseInt(matches[2], 10);
      this.model.setDate(month, year);
    }

    this.render();
  }
}
