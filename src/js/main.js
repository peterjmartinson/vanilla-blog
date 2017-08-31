/*jshint esversion:6, browser:true, node:true*/

import View       from './view';
import { $on }    from './util';
import Model      from './model';
import Controller from './controller';

class App {
  constructor() {
    const model = new Model(),
          view  = new View();
    this.controller = new Controller(model, view);
  }
}

const app = new App();

const setView = () => {
  // `document.location.hash` is the text given to the View
  app.controller.setView(document.location.hash);
};

$on(window, 'load', setView);
$on(window, 'hashchange', setView);

