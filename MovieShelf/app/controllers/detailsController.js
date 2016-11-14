var app = angular.module('movieShelfApp');

app.controller('detailsController', 
  ['$scope', '$http', 'movieService', '$stateParams',
  function ($scope, $http, movieService, $stateParams) {

    var imgPath = "https://image.tmdb.org/t/p/w342";
    var profilePath = "https://image.tmdb.org/t/p/w185"; // w45, w185 
    var placeholder = "http://placehold.it/180x280";
    var placeholderprofile = "http://placehold.it/185x277";

    $scope.hide = function() {
        $scope.hidden = true;
    }

    init();

    function init() {
      $scope.limit = 4;
      $scope.hidden = false;
      $scope.id = $stateParams.id;

      movieService.getMovieDetails($scope.id).then(function(resp) {
        console.log(resp);
        var poster; 
        if (resp.data.poster_path) 
            poster = imgPath + resp.data.poster_path;
          else 
            poster = placeholder;

        $scope.cast = [];

        for(var i=0; i<resp.data.credits.cast.length; i++) {
          if (resp.data.credits.cast[i].profile_path === null) {
            profile = placeholderprofile;
          } else profile = profilePath + resp.data.credits.cast[i].profile_path;

          var obj = {
            name: resp.data.credits.cast[i].name,
            image: profile
          }

          $scope.cast.push(obj);
        };

        console.log($scope.cast);


        $scope.videos = resp.data.videos;
        $scope.title = resp.data.original_title;
        $scope.tagline = resp.data.tagline;
        $scope.genres = resp.data.genres;
        $scope.runtime = resp.data.runtime;
        $scope.overview = resp.data.overview;
        $scope.releasedate = resp.data.release_date; 
        $scope.poster = poster;
        $scope.rating = resp.data.vote_average === 0 ? 'No rating yet!' : resp.data.vote_average;
        $scope.imdb = resp.data.imdb_id;
        $scope.homepage = resp.data.homepage;
        $scope.year = $scope.releasedate.slice(0,4);
        $scope.similar = resp.data.recommendations;
      });
    }
  }]);