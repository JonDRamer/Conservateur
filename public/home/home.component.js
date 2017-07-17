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
        .then((res) => {
          console.log(res.data);
          if (res.data.userId) {
            $state.go('curator');
          } else {
            console.log(res.data);
          }
        });
    }

  }

}());
