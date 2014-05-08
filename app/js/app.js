'use strict';


// Declare app level module which depends on filters, and services
angular.module('HTML5Player', [
  'ngRoute',
  'HTML5Player.filters',
  'HTML5Player.services',
  'HTML5Player.directives',
  'HTML5Player.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/mainPlayer', {templateUrl: 'mainPlayer.html', controller: 'MainPlayer'});
  $routeProvider.when('/playList', {templateUrl: 'playList.html', controller: 'PlayList'});
  $routeProvider.otherwise({redirectTo: '/mainPlayer'});
}]);
