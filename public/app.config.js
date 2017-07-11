(function() {
  "use strict";

  angular.module('app', ['ui.router'])
    .config(config);

  config.inject = ["$stateProvider", "$urlServiceProvider", "$locationProvider"];

  function config($stateProvider, $urlServiceProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    });

    $stateProvider
      .state({
        name: 'home',
        url: '/Home',
        component: 'home'
      })
    $stateProvider
      .state({
        name: 'howItWorks',
        url: '/How-It-Works',
        component: 'howItWorks'
      })
    $stateProvider
      .state({
        name: 'startACollection',
        url: '/Start-A-Collection',
        component: 'startACollection'
      });

  }
}());
