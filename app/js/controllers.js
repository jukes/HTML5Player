'use strict';

/* Controllers */

angular.module('HTML5Player.controllers', [])
  .controller('MainPlayer', ['$scope', function($scope) {
          
          $scope.albumArt = {
              name: "Alice in Chains",
              src: "http://ecx.images-amazon.com/images/I/61MHVDdXOdL.jpg",
              w: 200,
              h: 200
          };
          
          $scope.currentTrack = {
              artist: "Alice in Chains",
              title: "Sludge Factory",
              album: "Alice in Chanis (Tripod) [Release]",
              year: "1995",
              duration: "5:20",
              info: "In many ways, Alice in Chains was the definitive heavy metal band of the early '90s. Drawing equally from the heavy riffing of post-Van Halen metal and the gloomy strains of post-punk, the band developed a bleak, nihilistic sound that balanced grinding hard rock with subtly textured acoustic numbers. They were hard enough for metal fans, yet their dark subject matter and punky..."
          };
  

  }])
  .controller('PlayList', ['$scope', function($scope) {
          

  }])
  .controller('ShowLyrics', ['$scope', function($scope) {
          

  }]);
