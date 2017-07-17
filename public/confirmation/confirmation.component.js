(function() {
  "use strict";

  angular.module("app")
    .component("confirmation", {
      controller: controller,
      templateUrl: './confirmation/confirmation.template.html'
    });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = () => {
      vm.order = JSON.parse(localStorage.order);
      vm.sendConfirmationEmail();
    }

    vm.sendConfirmationEmail = () => {
      $http.post("/collectors", vm.order);
    } //end of submitOrder function

  } //end of controller function
}());
