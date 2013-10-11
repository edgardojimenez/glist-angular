/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 8/20/13
 * Time: 7:04 PM

 */

app.factory('repo', ['$http', 'config', function($http, config) {

    function getRemote(options) {
        return $http({
            method: options.method,
            url: options.url,
            responseType: 'json',
            data: options.data,
            headers: {
                'X-Api-Key': config.environment.apiKey
            }
        });
    }

    return {

        getData: function (key) {
            return getRemote({
                url: config.environment.serverUrl + '/api/' + key,
                method: 'GET'
            });
        },

        remove: function (key, id) {
            return getRemote({
                url: config.environment.serverUrl + '/api/' + key + '/' + id,
                method: 'DELETE'
            });
        },

        clearGroceries: function () {
            return getRemote({
                url: config.environment.serverUrl + '/api/groceries',
                method: 'DELETE'
            });
        },

        addProductToGroceryList: function (id) {
            return getRemote({
                url: config.environment.serverUrl + '/api/groceries/' + id,
                method: 'GET'
            });
        },

        addProductToProductList: function (name, addToList) {
            return getRemote({
                url: config.environment.serverUrl + '/api/products',
                method: 'POST',
                data: { name: name, addToList: addToList }
            });
        }

    };
}]);