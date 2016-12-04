angular
  .module('instaNude', [
    'ionic',
    'app.run',
    'app.routes',
    'app.constants',
    'app.config',

    'ngCordova',

    'base.controller',

    // app views modules
    'auth.login.controller',
    'main.controller',

  ])