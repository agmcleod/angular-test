// initialize after cordova. No ng-app tag on html, since we're bootstrapping manually.
document.addEventListener("deviceready", function () {
  db.migrateDb(function () {
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
    });
  });
});