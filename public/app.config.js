(function() {
  "use strict";

  angular.module('app', ['ui.router'])
    .config(config);

  config.inject = ["$stateProvider", "$urlServiceProvider", "$locationProvider"];

  function config($stateProvider, $urlServiceProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    });

    $stateProvider
      .state({
        name: 'home',
        url: '/Home',
        component: 'home'
      });

  }
}());
