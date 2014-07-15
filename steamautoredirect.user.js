// ==UserScript==
// @name       Steam Auto Redirect
// @namespace  http://cpancake.github.io/steamautoredirect
// @version    0.1
// @description  No more steam link filter.
// @match      https://steamcommunity.com/linkfilter/*
// @copyright  2014 Andrew Rogers
// @run-at document-start
// ==/UserScript==

window.location = window.location.search.substring(5);