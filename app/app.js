(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'product.html', controller: 'catchErrorCtrl'
        });
        $routeProvider.when('/order', {
            templateUrl: 'order.html'
        });
        $routeProvider.when('/displayOrder', {
            templateUrl: 'order.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    var productCatch;

    app.controller('catchErrorCtrl', function ($scope)
    {
        $scope.product = {name: 'tomato soup'};

        $scope.$watch('product', function (newValue)
        {
            productCatch = newValue;
        });
    });

    app.controller('OrderCtrl', function ($rootScope, $location, $scope)
    {

        $scope.rejectProduct = {};

    });


})();