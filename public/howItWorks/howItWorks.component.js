(function() {
  "use strict";

  angular.module("app")
    .component("howItWorks", {
      controller: controller,
      templateUrl: './howItWorks/howItWorks.template.html'
    });

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.onInit = () => {}
  }

}());
