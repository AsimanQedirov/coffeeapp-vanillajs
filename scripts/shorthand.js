const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const $id = (id) => document.getElementById(id);
const $class = (className) => document.getElementsByClassName(className);
const $tag = (tagName) => document.getElementsByTagName(tagName);
const $name = (name) => document.getElementsByName(name);

HTMLElement.prototype.$ = function (selector) {
  return this.querySelector(selector);
};
HTMLElement.prototype.$$ = function (selector) {
  return this.querySelectorAll(selector);
};
HTMLElement.prototype.$id = function (id) {
  return this.getElementById(id);
};
HTMLElement.prototype.$class = function (className) {
  return this.getElementsByClassName(className);
};
HTMLElement.prototype.$tag = function (tagName) {
  return this.getElementsByTagName(tagName);
};
HTMLElement.prototype.$name = function (name) {
  return this.getElementsByName(name);
};

export { $, $$, $id, $class, $tag, $name };
