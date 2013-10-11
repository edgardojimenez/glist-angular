/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/7/13
 * Time: 5:12 PM

 */

app.controller('groceriesController', ['$scope', 'groceriesService', function ($scope, service) {
    $scope.groceries = [];
    $scope.$emit('message', '');

    service.getGroceries().success(function (data) {
        if (data) {
            for (var i = 0; i < data.length; i++)
                $scope.groceries.push({ product: data[i].productName, id: data[i].productId});

        }
    }).error(function(err) {
        $scope.$emit('message', 'error: ' + err.message);
    });

    $scope.removeGrocery = function(id, index) {
        service.removeGrocery(id).success(function (data) {
            $scope.groceries.splice(index,1);
        }).error(function(err) {
            $scope.$emit('message', 'error: ' + err.message);
        });
    };

}]);
