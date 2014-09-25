angular.module("ninja.routes", ["ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
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
}]);
