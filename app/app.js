/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/7/13
 * Time: 4:37 PM

 */

var app = angular.module('glist', []);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'groceriesController',
            templateUrl: 'app/views/groceries.html'
        }).when('/products', {
            controller: 'productsController',
            templateUrl: 'app/views/products.html'
        }).when('/add', {
            controller: 'productsController',
            templateUrl: 'app/views/addProduct.html'
        }).otherwise({ redirectTo: '/' });

});



