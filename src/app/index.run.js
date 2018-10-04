(function() {
  'use strict';

  angular
    .module('nuevoProyecto')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $rootScope.api = 'http://credinform.indomita.bo/credinformapi'

    $log.debug('runBlock end');
  }




})();
