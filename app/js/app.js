'use strict';


// Declare app level module which depends on filters, and services
angular.module('HTML5Player', [
  'ui.bootstrap',
  'ngRoute',
  'HTML5Player.filters',
  'HTML5Player.services',
  'HTML5Player.directives',
  'HTML5Player.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainPlayer', {templateUrl: 'mainPlayer.html', controller: 'MainPlayer'});
  $routeProvider.when('/playList', {templateUrl: 'playList.html', controller: 'PlayList'});
  $routeProvider.otherwise({redirectTo: '/mainPlayer'});
}]);
