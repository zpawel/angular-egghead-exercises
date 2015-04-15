(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing here

    app.controller('appCtrl', function ($scope, $routeParams)
    {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();