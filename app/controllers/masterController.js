/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/7/13
 * Time: 6:12 PM

 */

app.controller('masterController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
    $scope.menu = ['list', 'products', 'add'];
    $scope.message = "";

    $rootScope.$on('message', function (e, message) {
        $scope.message = message;
    });

    $scope.isActive = function (path) {
        return path === $location.path();
    };

    $scope.showAlert = function () {
        return !Boolean($scope.message);
    };

    $scope.showAlertInfo = function () {
        return $scope.message.indexOf('info') === 0;
    };

    $scope.showAlertSuccess = function () {
        return $scope.message.indexOf('success') === 0;
    };

    $scope.showAlertError = function () {
        return $scope.message.indexOf('error') === 0;
    };

    $scope.showAlertWarning = function () {
        return $scope.message.indexOf('warning') === 0;
    };
}]);
