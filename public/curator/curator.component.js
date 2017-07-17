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

    vm.addArtist = (artist) => {
      vm.artists.push(vm.artist)
      $http.post('/artists', vm.artist)
        .then(function(res) {}, function(res) {
          console.log(res);
        })
      vm.form = false;
      delete vm.artist;
      vm.newArtist.$setPristine();
    };

    vm.deleteArtist = (artist) => {
      vm.artists[vm.artists.indexOf(artist)] = {
        name: "",
        store: "",
        bio: "",
        tags: "",
        headshot: "",
        img_url1: "",
        img_url2: "",
        img_url3: "",
        img_url4: ""
      }

      // vm.artiststwo = null
      console.log(vm.artists);

      // console.log(vm.artists);
      // $http.delete(`/artists/${artist.id}`)
      //   .then(function(res) {}, function(res) {
      //     console.log(res);
      //   });
    };

  }

}());
