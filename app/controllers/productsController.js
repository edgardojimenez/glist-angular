/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/7/13
 * Time: 5:12 PM

 */

app.controller('productsController', ['$scope', 'productsService', 'utils', function ($scope, productsService, utils) {
    $scope.products = [];
    $scope.$emit('message', '');
    $scope.productRemove = { id: 0 };

    $('#okDelete').on('click', function () {
        $scope.$apply(function () {
            productsService.deleteProduct($scope.productRemove.id).success(function () {
                var size = $scope.products.length;
                for (var i = 0; i < size; i++) {
                    if ($scope.products[i].id === $scope.productRemove.id) {
                        $scope.products.splice(i, 1);
                        break;
                    }
                }
                $('#myModal').modal('hide');
            }).error(function(err) {
                $scope.$emit('message', 'error: ' + err.message);
                $('#myModal').modal('hide');
            });
        })
    });

    productsService.getProductsFlagged()
        .then(function (data) {
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    data[i].headerColor = data[i].product.length === 1 && data[i].id === -1;
                    $scope.products.push(data[i]);
                }
            }
        }, function(err) {
            $scope.$emit('message', 'error: ' + err.message);
        });

    $scope.addProduct = function(product) {
        var validateMessage = productsService.validateProduct(product);
        if (validateMessage) {
            $scope.$emit('message', 'warning: ' + validateMessage);
            return;
        }

        var success = function () {
            $scope.$emit('message', 'success: ' + utils.upperCase(product.name) + ' was added');
            product.name = null;
            product.addToList = false;
        };

        productsService.addProduct(product).success(function (data) {

            if (data) {
                if (product.addToList) {
                    productsService.addProductToGroceries(data.id).success(success).error(function(err) {
                        $scope.$emit('message', 'error: ' + err.message);
                    });
                } else {
                    success();
                }

            } else {
                $scope.$emit('message', 'error: No product was was returned');
            }
        }).error(function (err) {
            $scope.$emit('message', 'error: ' + err.message);
        });
    };

}]);