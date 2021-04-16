(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/subtract', [])

		.filter('momentSubtract', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input, type, times) {
				if(!isMoment(input)) { return input; }
				if(!type) { type = 'days'; }
				if(!times) { times = 1; }

				/**
				 * Deprecation warning: moment().add(period, number) is deprecated.
				 * Please use moment().add(number, period).
				 */
				return input.subtract(times, type);
			};
		}]);
})();