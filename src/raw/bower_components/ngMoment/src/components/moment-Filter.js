(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/moment', [])

		.filter('moment', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input, format) {
				if(!format) format = '';

				var isValid = $moment(input, format).isValid();

				if(!isMoment(input) && !isValid) return input;

				var newInput = $moment(input, format);

				if(isValid) {
					return newInput;
				} else {
					return input;
				}
			};
		}]);
})();