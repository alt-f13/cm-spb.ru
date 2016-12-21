'use strict';

/**
 * @ngdoc overview
 * @name schedulerApp
 * @description
 * # schedulerApp
 *
 * Main module of the application.
 */
var db_name = 'gbook';

var $app = angular
  .module('schedulerApp', [
    'ngResource',
    'SimpleCouch',
    'ngHandsontable'
  ])
  .config(function ($httpProvider,couchConfigProvider) {
      if(location.hostname === 'localhost') {
        couchConfigProvider.setServer("/db");
      }else {
        couchConfigProvider.setServer("https://couch.2d-it.ru");
      }
    couchConfigProvider.setDB('gbook');
    $httpProvider.defaults.withCredentials = true;

    //couchConfigProvider.setMethod('method GET/JSONP');


  });
	angular.module('schedulerApp')
  .controller('SchedulerCtrl', function ($scope, couchdb) {
    var $db = $scope.$db = couchdb;
    var _day;

    // var _hot =hotRegisterer.getInstance('my-handsontable');
    $scope.$on('authenticated', function(e,data) {
      console.log("sheduler authenticated event data:", data);
      $scope.authenticated=data;
    });

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
            td.style.backgroundColor = "#eee";
            $(td).addClass("edited");
            //console.log(td);
          }
           //console.log("exist", col, _row[col]);
           //console.log(td.style);
        }
        //console.log(td);

        return td;
    };
    $scope.dates=[];


        $scope.location = function (_day) {
          $location.path("/scheduler/"+ _day);
          $scope.$apply
        }
    $scope.settings = {
      // contextMenu: [
      //   'row_above', 'row_below', 'remove_row'
      // ],
      contextMenu: true,
      rowHeights: 50,
      stretchH: 'all',
      colWidths: 30, // can also be a number or a function
      rowHeaders: true,
      colHeaders: true,
      //mergeCells: $scope._doc.grid.mergeCells,
      // callbacks have 'on' prefix
      onAfterInit: function() {
        //console.log('onAfterInit call');
      },
      onAfterChange: function(index, amount) {
        //console.log($scope._doc);
        //console.log(index , amount);
        if(index && $scope._doc._rev) {
          if(!$scope._doc.cellStyle) $scope._doc.cellStyle=new Array(10);
          if(!$scope._doc.cellStyle[index[0][0]]) $scope._doc.cellStyle[index[0][0]]={};
          $scope._doc.cellStyle[index[0][0]][index[0][1]]="grey"
          $db.doc.put($scope._doc, function(data) {
            console.log("put:", data);
            $scope._doc._rev=data.rev;
          });
        }


      },
      // contextMenuCopyPaste: {
      //       swfPath: 'zeroclipboard/dist/ZeroClipboard.swf';
      // }

    };


    if($routeParams.day ===  undefined) {
        var tomorrow=Date.today().add(1).days();
        if(tomorrow.is().sunday()||tomorrow.is().saturday()) {
          tomorrow=Date.today().next().monday();
        }
        $scope._day = moment(tomorrow).unix().toString();
        $location.path("/scheduler/"+ $scope._day);
      } else {
        console.log($routeParams);
        $scope._day = $routeParams.day;
      }
      moment.locale("en");
    $scope._day_literal = moment.unix($scope._day).format("dddd").toLowerCase();

    $db.doc.get($scope._day, function(data) {
        $scope._doc=data;
        console.log(data);
    })
      .error(function() {
        //console.log("error");
        $db.doc.get($scope._day_literal, function(data) {
          $scope._doc=data;
          moment.locale("ru");
          $scope._doc.date=moment.unix($scope._day).format('dddd DD MMMM YYYY');
          $scope._doc._id=$scope._day;
          $scope._doc.type="schedule";
          $scope._doc._rev=undefined;
          console.log($db.user.get());
          $scope._doc.author=$db.user.get().name;
          $scope._doc.cellStyle=new Array(10);
          // console.log(_hot.mergeCells.mergeRange(data.grid.mergeCells));
          // _hot.mergeCells = new Handsontable.MergeCells(data.grid.mergeCells);
          // _hot.updateSettings({ mergeCells: data.grid.mergeCells, cells: data.grid.data });
          // _hot.render();
          // $scope.settings.mergeCells = data.grid.mergeCells;
          console.log($scope._doc);
          //$scope.$apply();

        });
      });

  $db.view('scheduler', 'schedules', {}, function(data) {
    console.log(data);
    $scope.dates=data.map(function(i) {
      return i.id;
    });
    //$scope.$apply
  });



  });
