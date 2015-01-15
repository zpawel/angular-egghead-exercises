(function ()
{
    'use strict';

    var provider = angular.module('provider', ['ngRoute']);

    provider.config(function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'propertyProduct.html', controller: 'catchErrorCtrl'
        });
        $routeProvider.when('/order', {
            templateUrl: 'propertyOrder.html'
        });
        $routeProvider.when('/displayOrder', {
            templateUrl: 'propertyOrder.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    var productCatch;
    provider.controller('catchErrorCtrl', function ($scope)
    {
        $scope.$watch('product', function (newValue)
        {
            productCatch = newValue;
        });
    });
    provider.controller('appCtrl', function ($rootScope, $location, $scope)
    {
        $scope.rejectProduct = {};

    });


})();