(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: './home.template.html'
    });

  contoller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.onInit = () => {}
  }

}());
