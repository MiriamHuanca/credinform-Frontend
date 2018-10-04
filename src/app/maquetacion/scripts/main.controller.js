(function() {
  'use strict';

  angular
    .module('nuevoProyecto')
    .controller('miControladorDos', miControladorDos);

  /** @ngInject */
  function miControladorDos($log, webDevTec, toastr) {
    $log.debug('muestra');
    //texto a mostrar por consola

    var vm = this;

    vm.alumnos = [
      {nombre:"Juan", telefono:"12345678",curso:"3° ro"},
      {nombre:"Rosa", telefono:"2345678",curso:"4° to"},
      {nombre:"Luis", telefono:"32345678",curso:"5° to"},
      {nombre:"Ana", telefono:"42345678",curso:"6° to"}
    ];



  }
})();
