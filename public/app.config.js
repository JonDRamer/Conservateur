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
      .state({
        name: 'howItWorks',
        url: '/How-It-Works',
        component: 'howItWorks'
      })
      .state({
        name: 'startACollection',
        url: '/Start-A-Collection',
        component: 'startACollection'
      })
      .state({
        name: 'confirmation',
        url: '/Confirmation',
        component: 'confirmation'
      })
      .state({
        name: 'curator',
        url: '/Curator',
        component: 'curator'
      })
      .state({
        name: 'artist',
        url: '/Artist',
        component: 'artist'
      });

  }
}());
