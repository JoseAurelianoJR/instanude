angular
  .module('app.run', [])
  .run(runBlock);

function runBlock($ionicPlatform) {

  $ionicPlatform.ready(function() {

    // keyboard config
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    // status bar
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
};