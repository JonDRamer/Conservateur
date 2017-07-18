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
      $http.get('/artists')
        .then((artists) => {
          vm.artists = artists.data;
        })
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
        .then(function(response) {
          vm.getArtists();
          return response.data;
        }, function(response) {
          console.log("Promise rejected");
        })
      vm.form = false;
      delete vm.artist;
      vm.newArtist.$setPristine();
    };

    vm.deleteArtist = (artist) => {
      $http.delete(`/artists/${artist.id}`)
        .then(function(response) {
          vm.getArtists();
          console.log("It Worked");
          return response.data;
        }, function(response) {
          console.log("Promise rejected");
        });
    };

  }

}());
