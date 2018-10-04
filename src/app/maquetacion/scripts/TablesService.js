'use strict';
angular
  .module('nuevoProyecto')
  .factory('TablesService', function ($http, $rootScope) {
    return {
      filtrar: function (tabla, parametros) {
        return $http.post($rootScope.api + '/api/' + tabla + '/filtrar', parametros);
      }
    };
  });
