var app = angular.module('movieShelfApp');

app.controller('searchController', 
  ['$scope', '$http', 'movieService', 
  function($scope, $http, movieService){
    var imgPath = "https://image.tmdb.org/t/p/w185";
    var placeholder = "http://placehold.it/180x280";
    var page = 1; 
    init();

    // SEARCH for a movie - watches input which refreshes every 500ms
    $scope.$watch('search', function() {
      fetch(); 
    });

    // Toggle list and grid view
    $scope.toggleList = function() {
      $scope.showList = true;
    };

    $scope.toggleGrid = function() {
      $scope.showList = false;
    };

    function init() {
      page = 1;
      $scope.search = "";
      $scope.showList = false;

      // display latest movies in search results
      movieService.getInTheaters().then(
        parseData
      ), function() {
        $scope.error = 'unable to retrieve movies';
      }
    }

    // function called every 500ms
    function fetch(){
      $scope.search = $("#searchfield").val();

      if ($scope.search.length > 0)
      //this query allows users to search by title which is input by the user
      movieService.searchMovies($scope.search)
        .then( parseData );
    }


    function parseData(resp) {
      $scope.searchResults = [];

      //the voter average for the movie returned
      $scope.rating = 'Rating: '+ resp.data.results[0].vote_average;

      $scope.year = "(" + resp.data.results[0].release_date.slice(0,4) + ")";

      for (var i=0; i<resp.data.results.length; i++) {
        var poster = '';
        if (resp.data.results[i].poster_path) 
          poster = imgPath + resp.data.results[i].poster_path;
        else 
          poster = placeholder;

        var obj = {
          id : resp.data.results[i].id,
          title : resp.data.results[i].original_title,
          poster : poster,
          rating : resp.data.results[i].vote_average,
          releasedate : resp.data.results[i].release_date,
          date : resp.data.results[i].release_date.slice(0,4)
        }

        $scope.searchResults.push(obj);
      }
    }
}]);