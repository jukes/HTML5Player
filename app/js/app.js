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
  $routeProvider.when('/mainPlayer', {templateUrl: 'partials/mainPlayerN.html', controller: 'MainPlayer'});
  $routeProvider.when('/playList', {templateUrl: 'playList.html', controller: 'PlayList'});
  $routeProvider.otherwise({redirectTo: '/mainPlayer'});
}]);

/**
 * Last FM API: 
 * API Key: 91d269af490e2861bde6e5c32c171b76
 * Secret: is 87550d1623b08463c1bb83cd4afea262
 * 
 * http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=U2&format=json&api_key=91d269af490e2861bde6e5c32c171b76
 * 
 */
