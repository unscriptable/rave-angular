/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

require('angular');
require('angular-route');

//var es5Transform = require('rave/lib/es5Transform');

var angular = typeof global !== 'undefined'
	? global.angular
	: typeof window !== 'undefined' ? window.angular
	: void 0;

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
