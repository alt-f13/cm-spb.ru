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
		//couchConfigProvider.setServer("http://localhost:5984");
		// if(location.hostname === 'localhost') {
		// 	couchConfigProvider.setServer("http://localhost:5984");
		// }else {
			couchConfigProvider.setServer("https://couch.2d-it.ru");
		// }
    couchConfigProvider.setDB('cm-spb');
  });

	angular.module('schedulerApp')
	.filter('joinBy', function () {
			return function (input,delimiter) {
					return (input || []).join(delimiter || ',');
			};
	})
  .controller('SchedulerCtrl', function ($scope, couchdb) {
    var $db = $scope.$db = couchdb;
		$scope.dbUrl=$db.config.getServer()+"/"+$db.db.getName()+"/";

		$scope.update = function() {
      $db.view('scheduler', 'people', {}, function(data) {
        $scope.docs=data;
        console.log(data);
      });
    };
    $scope.update();

  });
