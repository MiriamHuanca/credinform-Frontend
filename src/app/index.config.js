(function() {
  'use strict';

  angular
    .module('nuevoProyecto')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);// con false se borra de consola $log sms

    $locationProvider.html5Mode(true).hashPrefix('#');

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
