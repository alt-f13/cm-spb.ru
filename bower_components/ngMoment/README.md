ngMoment
========

A module to help you to integrate Moment.js and AngularJS

## Demos
[Live example](http://plnkr.co/edit/UMprnLZnuqS0VT49vVy9?p=preview)

## Issues
Do you have some issue? Let us know: [https://github.com/VictorQueiroz/ngMoment/issues](https://github.com/VictorQueiroz/ngMoment/issues)

## Installation
```
bower install ng-moment --save
```

## Usage
```js
angular
  .module('app', ['ngMoment'])

  .run(['$moment', function ($moment) {
		$moment.locale('pt-br');
  }])
  
  .controller('MainCtrl', ['$moment', function ($moment) {
    $scope.someDate = moment().format();
  }]);
```

## Filters
```html
<tr ng-repeat="user in users">
	<td ng-bind="user._id"></td>
	<td ng-bind="user.name"></td>
	<td>{{ user.created_at | moment | momentFromNow }}</td>
	<td>{{ user.created_at | moment | momentAdd:'months':3 | momentFromNow }}</td>
	<td>{{ user.created_at | moment | momentFormat }}</td>
	<td>{{ user.created_at | momentFromNow }}</td> <!-- Less watchers, better for performance. -->
</tr>
```