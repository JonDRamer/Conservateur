(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: './home/home.template.html'
    });

  controller.$inject = ['$http', '$state'];

  function controller($http, $state) {
    const vm = this;

    vm.$onInit = () => {}

    vm.signIn = () => {
      $http.post("/auth/login", vm.login)
        .then((response) => {
          if (response.data.userId) {
            $state.go('curator');
          } else {
            console.log(response.data);
          }
        });
    }

  }

}());
