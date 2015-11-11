/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('chromeCrashEs5')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS', {
		ACTION_MODES: {
			INIT: "Initial",
			CREATE: "Create",
			UPDATE: "Update"
		}	
    })
    ;

})();
