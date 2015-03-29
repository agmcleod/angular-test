// load the app module with ngRouting
var myApp = angular.module('myApp', ['ngRoute']);
// the router. Pretty straight forward. Specify path for the template & controller
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/begin.html',
      controller: 'BeginController'
    })
    .when('/form', {
      templateUrl: 'partials/form.html',
      controller: 'FormController'
    })
}]);