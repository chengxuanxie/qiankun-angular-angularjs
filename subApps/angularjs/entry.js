
// 导出生命周期到window下
window.angularjs =  singleSpaAngular1.default({
  angular: window.angular,
  domElementGetter: function() {
    return document.getElementById('subapp-viewport');
  },
  mainAngularModule: 'main-module',
  preserveGlobal: true,
  template: '<root />',
})

angular.module('main-module', [])

angular
  .module('main-module')
  .component('root', {
    template: '<div>Hello from angularjs!</div>',
    controllerAs: 'vm',
    controller: function() {
      var vm = this;

      vm.$onInit = function() {
        console.log("mounting root angular component")
      }

      vm.$onDestroy = function() {
      
      }
    }
  })