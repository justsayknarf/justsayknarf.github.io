var app = angular.module('movieShelfApp');
app.controller('landingController',  
	[ '$scope', '$http', 'movieService',
    function ($scope, $http, movieService) {

      // INIT 
      // get config
      // set base_url, size for images. 
      var imgbase = "https://image.tmdb.org/t/p/w185";
      var posterSizes = []; 

      // get data from movie api
      // parse and store 
      // movie: title, poster, vote_average, overview
      $scope.popMovies = [];
      $scope.comingSoon = [];

      init();

      $scope.toggleComingSoon = function(){
          $scope.showComingSoon = true;
      }

      $scope.togglePopular = function(){
          $scope.showComingSoon = false;
      }

      function init() {
        movieService.getConfig().then(function(resp) {
          console.log("config:" , resp)
        });

        $scope.showComingSoon = true;
        var curDate = new Date();
        var flag = true;
        curDate = curDate.toISOString().slice(0,10);

        movieService.getPopularMovies().then(
          parseData
        ), function() {
          $scope.error = 'unable to retrieve movies';
        };

        movieService.getComingSoon(curDate).then(
          parseData
        ), function() {
          $scope.error = 'unable to retrieve movies';
        };

      }

      function parseData(resp) {
        console.log(resp.data);
        var searchResults = resp.data.results;
        var curDate = new Date();
        for (var i=0; i<4;i++) {
          var obj = {
            id: searchResults[i].id,
            title: searchResults[i].original_title,
            overview: searchResults[i].overview,
            poster: imgbase + searchResults[i].poster_path
          }

          if(Date.parse(resp.data.results[i].release_date) > Date.parse(new Date()))
            $scope.comingSoon.push(obj);
          else 
            $scope.popMovies.push(obj);
        }
      }

	}]);