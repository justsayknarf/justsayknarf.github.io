var app = angular.module('movieShelfApp');

app.config( function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/main');

  $stateProvider

    .state('main', {
        url: '/main',
        views: {
            '': { templateUrl: 'views/partial-main.html' },
            'jumbo@main': { 
              templateUrl: 'views/landing.html',
              controller: 'landingController'

             },
            'search@main': { 
                templateUrl: 'views/search.html',
                controller: 'searchController'
            }
        }
    })

    // .state('details', {
    //     url: "/details/:id",
    //     templateUrl: 'views/dialog.html',
    //     controller: 'detailsController',
    // })

    .state('details', {
        url: "/details/:id",
        views: {
          '': { 
            templateUrl: 'views/dialog.html',
            controller: 'detailsController'
          },
          'search@details': {
            templateUrl: 'views/search.html',
            controller: 'searchController'
          }
        }
    })

});