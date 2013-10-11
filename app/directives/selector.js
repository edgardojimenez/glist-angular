/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/22/13
 * Time: 8:24 PM

 */


app.directive('selectProduct', ['productsService', function(productsService) {
    return {
        restrict: 'E',
        template: '<blockquote>' +
                  '<button type="button" ng-if="product.id !== -1" id="{{product.product}}" ng-click="delete({{product.id}})" class="btn btn-default pull-right"><span class="glyphicon glyphicon-trash"></span></button>' +
                  '<h4 ng-if="product.id === -1" class="text-info listed" ng-class="{ black: {{product.headerColor}}}">{{product.product}}</h4>' +
                  '<h4 ng-if="product.id !== -1" ng-click="selected({{product.id}})" class="text-info pointer">{{product.product}}</h4>' +
                  '</blockquote>',
        transclude: false,
        replace: true,
        scope: {
            product: '=',
            productRemove: '='
        },
        link: function (scope, elem, attrs) {
            scope.delete = function (id) {
                $('#myModal').modal('show');
                scope.productRemove.id = id;
            };

            scope.selected = function (id) {
                productsService.addProductToGroceries(id);
                angular.element(elem.children()[1]).addClass('listed');
                angular.element(elem.children()[1]).removeClass('pointer');
                angular.element(elem.children()[0]).remove();
                scope.selected = null;
            };
        }
    }
}]);