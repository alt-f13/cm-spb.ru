(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/add', [])

		.filter('momentAdd', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input, type, times) {
				if(!isMoment(input)) { return input; }
				if(!type) { type = 'days'; }
				if(!times) { times = 1; }

				return input.add(times, type);
			};
		}]);
})();