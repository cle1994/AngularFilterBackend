var ideaSwatch = angular.module('ideaSwatch', ['ui.router', 'ngTouch', 'ngAnimate']);

ideaSwatch.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$state = $state;
}]);

ideaSwatch.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('create', {
      url: '/new',
      templateUrl: './views/new.html'
    })
    .state('swatch', {
      url: '/swatch',
      templateUrl: './views/swatch.html',
      abstract: true
    })
      .state('swatch.selected', {
        url: '/:swatch_id',
        templateUrl: './views/selected_swatch.html'
      })
        .state('swatch.selected.blurb', {
          url: '/blurb',
          templateUrl: './views/blurb.html'
        })
        .state('swatch.selected.links', {
          url: '/links',
          templateUrl: './views/links.html'
        })
}]);