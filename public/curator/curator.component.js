(function() {
  "use strict";

  angular.module("app")
    .component("curator", {
      controller: controller,
      templateUrl: './curator/curator.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.$onInit = () => {
      vm.getArtists();
    }

    vm.getArtists = () => {
      $http.get('/artists')
        .then((res) => {
          vm.artists = res.data;
          console.log(vm.artists);
        })
    }

  }

}());
