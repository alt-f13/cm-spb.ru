(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/fromNow', [])

		.filter('momentFromNow', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input, format) {
				if(isMoment(input) && input.isValid()) {
					return input.fromNow();
				}

				if (!isMoment(input) && $moment(input).isValid()) {
					input = $moment(input);

					return input.fromNow();
				}
			};
		}]);
})();