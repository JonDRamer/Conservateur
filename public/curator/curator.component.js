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
      $http.get('/arists')
        .then((artists) => {
          vm.artists = artists.data;
          return artists.data;
        })
    }

    vm.addArtist = (artist) => {
      vm.artists.push(vm.artist)
      $http.post('/artists', vm.artist)
        .then(function(response) {
          console.log("hey");
          return response.data;
        }, function(response) {
          console.log(response);
        })
      vm.form = false;
      delete vm.artist;
      vm.newArtist.$setPristine();
    };

    vm.deleteArtist = (artist) => {
      $http.delete(`/artists/${artist.id}`)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        }, function(response) {
          return response;
        });
    };

  }

}());
