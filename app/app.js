var provider = angular.module("provider", []);
provider.config(function ($routeProvider) {

});

provider.factory('exercisePromise', function () {
    var defer = null;
    return {
        set: function () {

        },
        get: function () {

        }
    }

});

provider.controller('appCtrl', function ($scope, exercisePromise) {

});