"use strict";

var QWIZM = QWIZM || {}; // QWIZM.state = QWIZM.state || {}; // an object to hold everything that goes in localStorage

QWIZM.handlers = QWIZM.handlers || {};
$('body').on("keyup", "#uname", function (e) {
  return e.target.value = utils.makeInputAlpha(e.target.value);
});
$('body').on("keyup", "#uId", function (e) {
  return e.target.value = utils.makeInputInteger(e.target.value);
});
$('body').on("click", "#login-button", QWIZM.handlers.validateLogin);
$('body').on("click", "#clear-button", QWIZM.handlers.reset);
$('body').on("click", "li.nav-item", QWIZM.handlers.updateView);