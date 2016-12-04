angular
  .module('main.controller', [])
  .controller('MainController', MainController)

function MainController($log) {
  var vm = this;

  vm.countLikes = function(){
     console.log('Like');
  }

  vm.timeline = [
    {
      "name": "Ágata Pereira",
      "avatar": "../img/in-thumb-1.jpg",
      "post": {
        "pic": "../img/in-post-1.jpg",
        "date": "04 Dezembro 2016",
        "description": "Minha xota 11/10"
      }
    },
    {
      "name": "Suelen Pereira",
      "avatar": "../img/in-thumb-2.jpg",
      "post": {
        "pic": "../img/in-post-2.jpg",
        "date": "04 Dezembro 2016",
        "description": "Minha xota 10/10"
      }
    }
  ]
}
