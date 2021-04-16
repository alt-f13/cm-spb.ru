'use strict';

/**
 * @ngdoc overview
 * @name schedulerApp
 * @description
 * # schedulerApp
 *
 * Main module of the application.
 */
var db_name = 'cm-spb';

var $app = angular
  .module('schedulerApp', [
    'ngResource',
    'SimpleCouch',
  ])
  .config(function ($httpProvider,couchConfigProvider) {
		couchConfigProvider.setServer("https://couch.2d-it.ru");
    couchConfigProvider.setDB('cm-spb');
  });
	angular.module('schedulerApp')
  .controller('SchedulerCtrl', function ($scope, couchdb) {
    var $db = $scope.$db = couchdb;
    var _day;


  });
