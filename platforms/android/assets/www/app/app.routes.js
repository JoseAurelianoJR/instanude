angular
  .module('app.routes', [])
  .config(routerConfig);

function routerConfig($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'app/auth/login/auth.login.html',
    controller: 'LoginController',
    controllerAs: 'login',
  })

  .state('app', {
    url: '/app',
    cache: false,
    abstract: true,
    templateUrl: 'app/base/sidemenu/sidemenu.html',
    controller: 'BaseController',
    controllerAs: 'base'
  })

  .state('app.main', {
    url: '/main',
    views: {
      'menuContent' :{
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }
    }
  })



  $urlRouterProvider.otherwise('/login');


}
