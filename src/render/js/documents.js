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
    'SimpleCouch'
  ])
  .config(function ($httpProvider,couchConfigProvider) {
		couchConfigProvider.setServer("https://couch.2d-it.ru");
    couchConfigProvider.setDB('cm-spb');
  });
	angular.module('schedulerApp')
  .controller('DocumentsCtrl', function ($scope, $http, couchdb) {
    var $db = $scope.$db = couchdb;

    $scope.tree=null;
    //var mainInfo = null;
      $http.get('includes/documents.json').success(function(data) {
        $scope.tree = data;
        console.log($scope.tree);
      });

  });
