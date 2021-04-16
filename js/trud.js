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
    // 'ngResource',
    'SimpleCouch',
		'chart.js'
  ])
  .config(function ($httpProvider,couchConfigProvider) {
		couchConfigProvider.setServer("https://couch.2d-it.ru");
    couchConfigProvider.setDB('cm-spb');
  });
	angular.module('schedulerApp')
  .controller('SchedulerCtrl', function ($scope, couchdb) {
    var $db = couchdb;
		// $scope.data = {
		// 	charts: [],
		// 	data: []
		// };
		// $db.doc.get('charts', function(data) {
		// 	console.log(data);
		// 	$scope.data=data;
		// });
		$scope.labels = [
			'Мастер по обработке цифровой информации',
		  'Станочник',
			'Слесарь по обслуживанию и ремонту подвижного состава',
			'Слесарь-электрик метрополитена',
			'Электромонтер тяговой подстанции',
			'Электромонтер СЦБ',
		];
    $scope.series = ['Всего выпускников', 'Трудоустроенны', 'Высшее образование', 'Призваны в РА'];

    $scope.data = [
			[25,18,21,22,19,21],
			[19,14,11,13,14,16],
			[1,0,0,0,0,2],
			[5,4,10,9,5,3]
    ];


  });
