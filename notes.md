`document.location` is a browser object that gives information about
the URL.  `document.location.hash` specifically saves everything from
`#/` onwards.

main
  (not an object!)
  App - class that only contains App.controller
  creates the app
  setView - run Controller.setView using the URL
  Runs setView on the two events (load, hashchange)

model
  constructor - creates Model.now (= 15th of this month)
  setDate(month, year) - mutates Model.now
  getDays() - returns an array of all days in the month
  toJSON() - returns the date and the array of days

view
  constructor - creates View.el, the #target element
  render(data) - puts data into #target

controller
  controller    - creates Controller.model and Controller.view
  render        - runs View.render
  setView(hash) - runs Model.setDate, then runs render

template
  (not an object, but a library!)
  html - returns changed HTML from tagged literal
  controlls, day, calendar - specific templates

util
  $on - the event handler
