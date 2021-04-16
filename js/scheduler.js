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

    $scope._doc={
      grid: {
        data: {},
        columns: {}
      },
      cellStyle: new Array(10)
    };
    $scope.validRenderer = function(instance, td, row, col, prop, value, cellProperties){
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        //console.log('validRenderer: ',td, row, col, prop, value);
        var _row = $scope._doc.cellStyle[row];
        if(_row && _row !== null) {
          if(typeof _row[col] !== 'undefined') {
            td.style.backgroundColor = "#292F3C";
            $(td).addClass("edited");
            console.log(td);
          }
           //console.log("exist", col, _row[col]);
           //console.log(td.style);
        }
        //console.log(td);

        return td;
    };

    $scope.settings = {
			readOnly: true,
      rowHeights: 50,
      stretchH: 'all',
      colWidths: 50, // can also be a number or a function
      rowHeaders: true,
      colHeaders: true,
			height: 550
    };
		var foo=1;
		var _today=Date.today();



		$scope._get=function(day) {
			var _day = moment(day).unix().toString();
			$db.doc.get(_day, function(data) {
	        $scope._doc=data;
	        console.log(data);
	    })
	      .error(function() {

					foo++;
					console.log("next day", day.add(1).day(), foo);
					if(foo < 14) {
						$scope._get(day.add(1).day())
					}else{

						$db.doc.get(moment(Date.today()).unix().toString(), function(data) {
				        $scope._doc=data;
				        console.log(data);
				    })
					};
	    });

		}
		$scope._get(_today.add(1).day());

  });
