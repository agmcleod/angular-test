myApp.controller('FormController', ['$scope', function ($scope) {
  $scope.interaction = {
    start_time: new Date().toISOString()
  };
  $scope.submit = function (interactionData) {
    var copy = angular.copy(interactionData);
    for (var key in interactionData) {
      if (interactionData.hasOwnProperty(key)) {
        $scope.interaction[key] = interactionData[key];
      }
    }
  }
}]);