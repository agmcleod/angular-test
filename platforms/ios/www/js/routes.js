var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])
.config(function ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});
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