(function() {
  'use strict';

  angular.module('chromeCrashEs5')
      .controller('CtrlrController',
    function($log, $scope, CONSTANTS) {
      $log.debug("CtrlrController is created");

      var vm = this;

      vm.setFormScope = function(_formScope) {
        vm.formScope = _formScope;
      };

      vm.isModeInit = function() {
        return vm.mode === CONSTANTS.ACTION_MODES.INIT;
      };

      vm.isModeUpdate = function() {
        return vm.mode === CONSTANTS.ACTION_MODES.UPDATE;
      };

      vm.isModeCreate = function() {
        return vm.mode === CONSTANTS.ACTION_MODES.CREATE;
      };

      var create = function(file1) {
        $log.debug("create(" + file1.field1 + ") is called.");
      };

  /*
      var update = function(file1) { 
        $log.debug("update(" + file1.field1 + ") is called.");
      };
  */

      vm.initCreate = function() {
        vm.mode = CONSTANTS.ACTION_MODES.CREATE;
        vm.save = create;

        // vm.formScope.form1.$setPristine();
        vm.formScope.form1.$setUntouched();

        vm.file1 = {
          field1: ''
        };

      };

      vm.validate = function(formElement) {
        if (vm.formScope.form1[formElement].$touched && vm.formScope.form1[formElement].$invalid) {
          return {
            'has-feedback has-error': true
          };
        } else{
          return {};
        }
      };

      var initialize = function() {
        vm.mode = CONSTANTS.ACTION_MODES.INIT;
      };

      initialize();
      
    });
})();
