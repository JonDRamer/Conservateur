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
      vm.form = false;
      $('body')
        .animate({
          scrollTop: 0
        }, 800);
      vm.getArtists();
    }

    vm.getArtists = () => {
      $http.get('/artists')
        .then((artists) => {
          vm.artists = artists.data;
        })
    }

    vm.addArtist = (artist) => {
      $http.post('/artists', vm.artist)
        .then(() => {
          vm.getArtists();
        });
      vm.form = false;
      delete vm.artist;
      vm.newArtist.$setPristine();
    };

    vm.deleteArtist = (artist) => {
      $http.delete(`/artists/${artist.id}`)
        .then(() => {
          vm.getArtists();
        });
    };

  }

}());
