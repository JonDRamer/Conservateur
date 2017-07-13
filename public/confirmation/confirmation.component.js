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
      vm.form = true;
      vm.confirmation = false;
      vm.checkout = false;
    }

    vm.proceedToCheckout = (consultation) => {
      $http.post("/collectors", JSON.parse(localStorage.order));
    } //end of submitOrder function

  } //end of controller function
}());
