(function() {
  "use strict";

  angular.module("app")
    .component("artist", {
      controller: controller,
      templateUrl: './artist/artist.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.$onInit = () => {
      vm.getPaintings();
    }

    vm.getPaintings = () => {
      $http.get('/paintings')
        .then((res) => {
          vm.paintings = res.data;
          console.log(vm.paintings);
        })
    }

  }

}());
