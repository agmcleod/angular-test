myApp.controller('FinishController', ['$scope', function ($scope) {
  $scope.finish = function () {
    var data = SessionStore.interaction;
    db.runQuery("INSERT INTO interactions (first_name, last_name, email, completed_at) VALUES(?, ?, ?, ?)", [data.first_name, data.last_name, data.email, new Date().toISOString()], function () {
      SessionStore.interaction = {};
      location.hash = "#/";
    });
  }
}]);