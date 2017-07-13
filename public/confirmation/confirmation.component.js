(function() {
  "use strict";

  angular.module("app")
    .component("confirmation", {
      controller: controller,
      templateUrl: './confirmation/confirmation.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.$onInit = () => {
      vm.order = JSON.parse(localStorage.order);
    }

    vm.sendConfirmationEmail = () => {
      console.log(vm.order);
      $http.post("/collectors", vm.order);
    } //end of submitOrder function

  } //end of controller function
}());
