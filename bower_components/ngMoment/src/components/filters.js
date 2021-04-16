(function () {
	'use strict';

	angular
		.module('ngMoment/Filters', [
			'ngMoment/Filter/fromNow',
			'ngMoment/Filter/add',
			'ngMoment/Filter/subtract',
			'ngMoment/Filter/format',
			'ngMoment/Filter/moment'
		]);
})();
