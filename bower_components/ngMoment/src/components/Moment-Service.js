(function (window) {
  'use strict';

	var $moment;

	if(window.hasOwnProperty('moment')) {
		$moment = angular.copy(window.moment);

		if($moment().hasOwnProperty('format') || window.hasOwnProperty('moment')) {
			window.moment = undefined;
		}
	}  
  
  angular
    .module('ngMoment/Service', [])
    
    .factory('$moment', [function () {
      return $moment;
    }]);
})(window);
