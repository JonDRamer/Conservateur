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

    vm.$onInit = () => {
      $('body')
        .animate({
          scrollTop: 0
        }, 0);
    }

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
