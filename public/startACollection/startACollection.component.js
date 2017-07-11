(function() {
  "use strict";

  angular.module("app")
    .component("startACollection", {
      controller: controller,
      templateUrl: './startACollection/startACollection.template.html'
    });

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.onInit = () => {}
  }

}());
