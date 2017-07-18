(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: './home/home.template.html'
    });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = () => {}

    vm.signIn = () => {
      $http.post("/auth/login", vm.login)
        .then((response) => {
          console.log(response.data);
          if (response.data.userId) {
            $state.go('curator');
          } else {
            console.log(response.data);
          }
        });
    }

  }

}());
