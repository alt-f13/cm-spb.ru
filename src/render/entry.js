---
webpack: true
standalone: true
---

/**
 * Entry webpack file for plm-spb.ru.
 *
 * This will build to out/bundle.js.
 */

// Example of how to load the package information with "json-loader":
//var package = require("json!../package.json");

require('angular');
require('jquery');

require('angular-animate');
require('angular-router');

//require('../src/raw/bower_components/angular/angular.js');
