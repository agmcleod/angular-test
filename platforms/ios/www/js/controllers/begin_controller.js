myApp.controller('BeginController', ['$scope', function ($scope) {
  $scope.begin = function () {
    location.hash = '#/form'
  }
}]);