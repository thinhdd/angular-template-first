'use strict';

// Declare app level module which depends on views, and components
angular.module('services', []);

angular.module('myApp', [
    'ngRoute',
    'view1',
    'view2',
    'services'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
