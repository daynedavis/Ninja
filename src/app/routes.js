angular.module("ninja.routes", ["ui.router"])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider

    .state("home", {
      url: "/",
      views: {
        "main@": {
          controller: "MainController",
          templateUrl: "app/templates/layouts/home.tpl.html"
        }
      }
    });
  }
]);
