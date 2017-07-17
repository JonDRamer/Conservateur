(function() {
  "use strict";

  angular.module("app")
    .component("howItWorks", {
      controller: controller,
      templateUrl: './howItWorks/howItWorks.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.onInit = () => {
      vm.form = false;
      vm.confirmation = false;
    }

    vm.sendQuestion = () => {
      vm.question = {
        name: vm.consultation.name.$viewValue,
        email: vm.consultation.email.$viewValue,
        question: vm.consultation.question.$viewValue
      }
      $http.post("/collectors/question", vm.question);
      delete vm.question;
      vm.consultation.$setPristine();
      vm.form = false;
      vm.confirmation = true;
    }
  }

}());
