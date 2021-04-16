(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/format', [])

		.filter('momentFormat', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input, format) {
				if(!input) return '';

				if(!format) format = '';

				// If this is not a moment instance, make it one
				if(!isMoment(input) && $moment(input).isValid()) {
					return $moment(input).format(format);
				}

				if(isMoment(input)) {
					return input.format(format);
				}
			};
		}]);
})();