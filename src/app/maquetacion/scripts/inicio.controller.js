(function() {
  'use strict';

  angular
    .module('nuevoProyecto')
    .controller('inicioController', miControladorDos);

  /** @ngInject */
  function miControladorDos($log, TablesService, toastr) {
    $log.debug('muestra');

    var vm=this;

    var params = {
      page: 1,
      per_page: 999,
      comparaciones: [
        {campo: 'paginas_id', operador: 'igual', dato: 1}
      ]
    };
    TablesService.filtrar('contenidos', params).success(function (res) {
      vm.contenido_res = res.resultado.data;
      $log.debug(vm.contenido_res);
    });


    var dato = {
      page: 1,
      per_page: 999,
      comparaciones: [
        {campo: 'paginas_id', operador: 'igual', dato: 2}
      ]
    };

    TablesService.filtrar('contenidos', dato).success(function (res) {
      vm.tu = res.resultado.data;
      $log.debug(vm.tu);
    });

    var dato_1 = {
      page: 1,
      per_page: 999,
      comparaciones: [
        {campo: 'paginas_id', operador: 'igual', dato: 4}
      ]
    };

    TablesService.filtrar('contenidos', dato_1).success(function (res) {
      vm.tu_1 = res.resultado.data;
      $log.debug(vm.tu_1);
    });

  }
})();
