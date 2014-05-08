/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

require('angular');
require('angular-route');

exports.create = create;

if (typeof angular === 'undefined') {
	throw new Error('Angular (angular.js) did not load.');
}
else if (!angular.isDefined('ngRoute')) {
	throw new Error('ngRoute (angular-route.js) did not load.');
}

function create (context) {
	// nothing to do
}
