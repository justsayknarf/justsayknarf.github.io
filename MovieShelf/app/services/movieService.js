var app = angular.module('movieShelfApp');

app.factory('movieService', ['$http', 'API_KEY', 'BASE_URL', function($http, API_KEY, BASE_URL){
	var factory = {};

  factory.getPopularMovies = function() {
  	return $http.get(BASE_URL + '/discover/movie?api_key=' + API_KEY + '&sort_by=popularity.desc');
	};

	factory.getComingSoon = function(curDate) {
  	return $http.get(BASE_URL + '/movie/upcoming?api_key=' + API_KEY);
	};

  factory.getInTheaters = function() {
    return $http.get(BASE_URL + '/movie/now_playing?api_key=' + API_KEY);
  };

	factory.searchMovies = function(query, page) {
    if(page !== undefined) {
      page = "&page=" + page;
    } else page = "";

    return $http.get(BASE_URL + '/search/movie?api_key=' + API_KEY + page + '&query='+ query);
	};

  factory.getConfig = function() {
    return $http.get(BASE_URL + '/configuration?api_key=' + API_KEY);
    // https://api.themoviedb.org/3/configuration?api_key=<<api_key>>
  }

  factory.getMovieDetails = function(id) {
    https://api.themoviedb.org/3/movie/284052?api_key=87de9079e74c828116acce677f6f255b&language=en-US&
    return $http.get(BASE_URL + '/movie/' + id + '?api_key=' + API_KEY + '&language=en-US&append_to_response=videos,credits,recommendations');
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US&append_to_response=undefined
  }

  return factory;
}]);