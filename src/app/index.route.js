(function() {
  'use strict';

  angular
    .module('chromeCrashEs5')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'CtrlrController',
        controllerAs: 'ctrlr'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
