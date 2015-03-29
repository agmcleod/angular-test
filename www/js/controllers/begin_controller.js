myApp.controller('BeginController', ['$scope', function ($scope) {
  // defines the function we use in the click handler
  $scope.begin = function () {
    // ngRoute uses hash urls
    location.hash = '#/form'
  }
}]);