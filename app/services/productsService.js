/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/20/13
 * Time: 7:04 PM

 */

app.factory('productsService', ['repo', 'config', '$q', 'utils', function (repo, config, $q, utils) {

    return {

        getProducts: function () {
            return  repo.getData('products');
        },

        addProductToGroceries: function (id) {
            return repo.addProductToGroceryList(id);
        },

        getProductsFlagged: function () {
            var groceries = [],
                products = [],
                deferred = $q.defer();

            repo.getData('groceries')
                .success(function (data) {
                    if (data) {
                        for (var i = 0; i < data.length; i++)
                            groceries.push(data[i].productName);
                    }

                    repo.getData('products')
                        .success(function (data2) {
                            if (data2) {
                                for (var i = 0; i < data2.length; i++) {
                                    if (groceries.indexOf(data2[i].name) !== -1) {
                                        products.push({product: data2[i].name, id: -1 });
                                    } else {
                                        products.push({product: data2[i].name, id: data2[i].id });
                                    }
                                }
                            }

                            deferred.resolve(products);

                        }).error(function (err) {
                            deferred.reject(err);
                        });

                }).error(function (err) {
                    deferred.reject(err);
                });

            return  deferred.promise;
        },

        deleteProduct: function (id) {
            return repo.remove('products', id);
        },

        addProduct: function (product) {
            return repo.addProductToProductList(product.name, product.addToList);
        },

        validateProduct: function (product) {
            if (!product || typeof product.name === 'undefined')
                return message = 'Product name is required';

            if (!product.name || typeof product.name !== 'string' || !utils.trim(product.name))
                return message = 'Invalid product name';

            return '';
        }

    };
}]);