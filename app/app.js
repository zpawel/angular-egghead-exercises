(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing here
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/home.html',
                controller: 'appCtrl'
            })
            .when('/details/:brand/:capacity',
            {
                templateUrl: 'views/details.html',
                controller: 'routeCtrl'
            })
            .when('/inputs/:brand/:capacity', {
                redirectTo: function (routeParams, path, search) {
                    if (routeParams.brand === 'secret' || routeParams.capacity === 'secret') {
                        return '/' + 'secret';
                    }
                    else {
                        return '/' + 'details';
                    }
                }
            })
            .when('/inputs/secret',
            {
                templateUrl: 'views/secret.html',
                controller: 'routeCtrl'
            })

    })

    app.controller('appCtrl', function ($scope, $routeParams) {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });

    app.controller('routeCtrl', function ($scope, $routeParams) {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
