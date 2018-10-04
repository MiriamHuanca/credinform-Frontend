(function() {
  'use strict';

  angular
    .module('nuevoProyecto')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('casa', {
        url: '/casa',
        templateUrl: 'app/principal/views/principal.html',
        controller: 'miControladorUno',
        controllerAs: 'casa'
      })

      .state('inicio', {
        url: '/inicio',
        templateUrl: 'app/maquetacion/views/maquetacion.html',
        controller: 'inicioController',
        controllerAs: 'inicio'
      })

      .state('menu1', {
        url: '/menu1',
        templateUrl: 'app/menu_xs_lg/views/cuerpo.html',
        controller: 'miMenuNuevo',
        controllerAs: 'ligadoAcuerpo'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/views/login.html',
        controller: 'miMenuNuevo',
        controllerAs: 'ligadoAcuerpo'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
