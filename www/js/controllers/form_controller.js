myApp.controller('FormController', ['$scope', function ($scope) {
  // setting up our interaction object
  $scope.interaction = {};
  // the submit handler
  $scope.submit = function () {
    // only proceed if it's valid
    if ($scope.interactionForm.$valid) {
      var copy = angular.copy($scope.interaction);
      SessionStore.interaction = copy;
      location.hash = '#/finish';
    }
    else {
      $scope.interactionForm.submitted = true;
    }

  }
}]);