// ==UserScript==
// @name         Hacker News Stop Wasting Time
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables mindless browsing of news stories. Only allows direct access to story items. Login is also broken.
// @author       Me
// @match        https://news.ycombinator.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.pathname.search("/item") == -1) {
    document.body.innerHTML = "<center><h1>Stop wasting time</h1></center>";
    }

})();
