'use strict';
var homeApp = angular.module('homeApp', []);

// add homeApp.provider 

// add homeApp.config 

// remove factory 
homeApp.factory('home', function() {
    return {
        color: 'red',
        number: (Math.floor((Math.random() * 100) + 1))
    };
});

homeApp.controller('HomeCtrl', function ($scope, home) {
        $scope.color = home.color;
        $scope.number = home.number;
});
