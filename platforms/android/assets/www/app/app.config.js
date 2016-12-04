angular
  .module('app.config', [])
  .config(config);

function config($ionicConfigProvider) {
  
  // set tabs position
  $ionicConfigProvider.platform.android.tabs.position('bottom');  
  $ionicConfigProvider.platform.ios.tabs.position('bottom');  
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

}