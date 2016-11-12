'use strict';

(function () {
var app = angular.module('movieShelfApp', 
  ['ngResource', 'ngRoute', 'ui.router']);

app.constant('API_KEY', '87de9079e74c828116acce677f6f255b');
app.constant('BASE_URL', 'https://api.themoviedb.org/3');

})();

