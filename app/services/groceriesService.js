/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/20/13
 * Time: 7:04 PM

 */

app.factory('groceriesService', ['repo', 'config', function(repo, config) {

    return {

        getGroceries: function () {
            return  repo.getData('groceries');
        },

        removeGrocery: function (id) {
            return repo.remove('groceries', id);
        }

//        getProductsFlagged: function () {
//            var groceries = [],
//                products = [],
//                deferred = $q.defer();
//
//            repo.getData('groceries')
//                .success(function (data) {
//                    if (data) {
//                        for (var i = 0; i < data.length; i++)
//                            groceries.push(data[i].productName);
//                    }
//
//                    repo.getData('products')
//                        .success(function (data2) {
//                            if (data2) {
//                                for (var i = 0; i < data2.length; i++) {
//                                    if (groceries.indexOf(data2[i].name) !== -1) {
//                                        products.push({product: data2[i].name, id: -1 });
//                                    } else {
//                                        products.push({product: data2[i].name, id: data2[i].id });
//                                    }
//                                }
//                            }
//
//                            deferred.resolve(products);
//
//                        }).error(function(err) {
//                            deferred.reject(err);
//                        });
//
//                }).error(function(err) {
//                    deferred.reject(err);
//                });
//
//            return  deferred.promise;
//        }
//        ,
//
//        remove: function (key, id) {
//            return getRemote({
//                url: config.environment.serverUrl + '/api/' + key + '/' + id,
//                method: 'DELETE'
//            });
//        },
//
//        clearGroceries: function () {
//            return getRemote({
//                url: config.environment.serverUrl + '/api/groceries',
//                method: 'DELETE'
//            });
//        },
//
//        addProductToGroceryList: function (id) {
//            return getRemote({
//                url: config.environment.serverUrl + '/api/groceries/' + id,
//                method: 'GET'
//            });
//        },
//
//        addProductToProductList: function (name, addToList) {
//            return getRemote({
//                url: config.environment.serverUrl + '/api/products',
//                method: 'POST',
//                data: { name: name, addToList: addToList }
//            });
//        }

    };
}]);