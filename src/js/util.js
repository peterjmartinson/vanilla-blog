/*jshint esversion:6, browser:true */

/**
 * Creates an event handler
*/
const $on = (target, event, handler) => {
  return target.addEventListener(event, handler);
};

export { $on };

