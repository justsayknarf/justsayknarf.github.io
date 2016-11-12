var app = angular.module('movieShelfApp');

app.controller('detailsController', 
  ['$scope', '$http', 'movieService', '$stateParams',
  function ($scope, $http, movieService, $stateParams) {

    var imgPath = "https://image.tmdb.org/t/p/w342";
    var placeholder = "http://placehold.it/180x280";

    $scope.hide = function() {
        $scope.hidden = true;
    }

    init();

    function init() {
      $scope.hidden = false;
      $scope.id = $stateParams.id;

      movieService.getMovieDetails($scope.id).then(function(resp) {
        console.log(resp.data);
        var poster; 
        if (resp.data.poster_path) 
            poster = imgPath + resp.data.poster_path;
          else 
            poster = placeholder;

        $scope.title = resp.data.original_title;
        $scope.tagline = resp.data.tagline;
        $scope.genres = resp.data.genres;
        $scope.runtime = resp.data.runtime;
        $scope.overview = resp.data.overview;
        $scope.releasedate = resp.data.release_date; 
        $scope.poster = poster;
        $scope.rating = resp.data.vote_average;
        $scope.imdb = resp.data.imdb_id;
        $scope.homepage = resp.data.homepage;
        $scope.year = $scope.releasedate.slice(0,4);
      });
    }
  }]);