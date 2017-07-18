(function() {
  "use strict";

  angular.module("app")
    .component("register", {
      controller: controller,
      templateUrl: './register/register.template.html'
    });

  controller.$inject = ['$http', '$state'];

  function controller($http, $state) {
    const vm = this;

    vm.$onInit = () => {}

    vm.signIn = () => {
      console.log(vm.login);
      $http.post("/auth/register", vm.login)
        .then((response) => {
          if (response.data.userId) {
            $state.go('home');
          } else {
            console.log(response.data);
          }
        });
    }

  }
}());
