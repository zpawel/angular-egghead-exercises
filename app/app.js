(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'views/product.html', controller: 'catchErrorCtrl'
        });
        $routeProvider.when('/order', {
            templateUrl: 'views/order.html'
        });
        $routeProvider.when('/displayOrder', {
            templateUrl: 'views/order.html'
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

        $scope.class = 'alert alert-danger';
        $scope.message = 'You give wrong data';

        $scope.class = 'alert alert-success';
        $scope.message = 'You give correct data';


    });


})();
