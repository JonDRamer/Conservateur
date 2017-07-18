(function() {
  "use strict";

  angular.module('app', ['ui.router'])
    .config(config);

  config.inject = ["$stateProvider", "$urlServiceProvider"];

  function config($stateProvider, $urlServiceProvider) {


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
        name: 'edit',
        url: '/Edit/:id',
        component: 'edit'
      })
      .state({
        name: 'register',
        url: '/Register',
        component: 'register'
      });

  }
}());
