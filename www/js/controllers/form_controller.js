myApp.controller('FormController', ['$scope', function ($scope) {
  // setting up our interaction object
  $scope.interaction = {
    start_time: new Date().toISOString()
  };
  // the submit handler
  $scope.submit = function (interactionData) {
    // only proceed if it's valid
    if ($scope.interactionForm.$valid) {
      var copy = angular.copy(interactionData);
      for (var key in interactionData) {
        if (interactionData.hasOwnProperty(key)) {
          $scope.interaction[key] = interactionData[key];
        }
      }
    }
    else {
      $scope.interactionForm.submitted = true;
    }

  }
}]);