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

    vm.submitOrder = (consultation) => {
      vm.order = {
        name: vm.consultation.name.$viewValue,
        email: vm.consultation.email.$viewValue,
        city: vm.consultation.city.$viewValue,
        state: vm.consultation.state.$viewValue,
        style: vm.consultation.style.$viewValue,
        url: vm.consultation.url.$viewValue,
        space: vm.consultation.space.$viewValue,
        images: vm.consultation.images.$viewValue,
        budget: vm.consultation.budget.$viewValue,
        timeline: vm.consultation.timeline.$viewValue
      }
      console.log("VM.Order: ", vm.order);
      localStorage.order = JSON.stringify(vm.order);
      console.log("Local Storage Order: ", JSON.parse(localStorage.order));
    }
  }

}());
