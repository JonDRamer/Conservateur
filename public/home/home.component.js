(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: './home/home.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.$onInit = () => {}

    vm.signIn = () => {
      $http.post("/auth/login", vm.login)
        .then((res) => {
          console.log(res.data);
          $state.go('curator');
        });
    }

  }

}());
