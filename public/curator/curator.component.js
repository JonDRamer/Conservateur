(function() {
  "use strict";

  angular.module("app")
    .component("curator", {
      controller: controller,
      templateUrl: './curator/curator.template.html'
    });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = () => {
      vm.form = false;
      vm.getArtists();
    }

    vm.getArtists = () => {
      $http.get('/artists')
        .then((artists) => {
          vm.artists = artists.data;
          return artists.data;
        })
    }

    vm.addArtist = (artist) => {
      vm.artists.push(vm.artist)
      $http.post('/artists', vm.artist)
        .then((response) => {
          vm.getArtists();
          vm.form = false;
          delete vm.artist;
          vm.newArtist.$setPristine();
          return response.data;
        });
    };

    vm.deleteArtist = (artist) => {
      $http.delete(`/artists/${artist.id}`)
        .then((response) => {
          vm.artists.splice(vm.artists.indexOf(artist), 1);
          return response.data;
        });
    };

  }

}());
