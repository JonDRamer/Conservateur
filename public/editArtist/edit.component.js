(function() {
  "use strict";

  angular.module("app")
    .component("edit", {
      controller: controller,
      templateUrl: './editArtist/edit.template.html'
    });

  controller.$inject = ['$http', '$stateParams'];

  function controller($http, $stateParams) {
    const vm = this;

    vm.$onInit = () => {
      vm.form = true;
      vm.getArtist();
    }

    vm.getArtist = () => {
      $http.get(`/artists/${$stateParams.id}`)
        .then((artist) => {
          vm.artist = artist.data;
          return artist.data;
        })
    }

    vm.updateArtist = () => {
      $http.patch(`/artists/${$stateParams.id}`, vm.artist)
        .then((artist) => {
          vm.form = false;
          return artist.data;
        })
    }

  }

}());
