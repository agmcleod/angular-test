// load the app module with ngRouting
var myApp = angular.module('myApp', ['ngRoute'])
.config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});
// the router. Pretty straight forward. Specify path for the template & controller
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/begin.html',
      controller: 'BeginController'
    })
    .when('/finish', {
      templateUrl: 'partials/finish.html',
      controller: 'FinishController'
    })
    .when('/form', {
      templateUrl: 'partials/form.html',
      controller: 'FormController'
    });
}]);