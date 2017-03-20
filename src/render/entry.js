
/**
 * Entry webpack file for plm-spb.ru.
 *
 * This will build to out/bundle.js.
 */

// Example of how to load the package information with "json-loader":
//var package = require("json!../../package.json");

var $ = require('jquery');

require('angular');
require('bootstrap-loader');
//require('font-awesome');
//require('angular-animate');
//require('angular-resource');
require('lightbox2');
require('lightbox2/dist/css/lightbox.css');
//require('./css/index.css.scss')
require('datejs');
require('jquery.diamonds.js/src/diamonds.css');
require('jquery.diamonds.js/src/jquery.diamonds.js');
require('jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js');
// require('');
// require('');
//require('../raw/bower_components/angular-simplecouch/angular.simplecouch.js');
var vide = require('vide');
  $('#programs').tubular({videoID: 't2my91byjR4'});
  console.log('bootstrap function');
