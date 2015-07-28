'use strict';
var homeApp = angular.module('homeApp', []);

// add homeApp.provider 

// add homeApp.config 

// remove factory 
homeApp.factory('Home', function() {
    var exampleNum = 67;
    return {
        color: 'red',
        number: exampleNum % 2 ? 100 : 99
    };
});

homeApp.controller('HomeCtrl', function (Home)
{
    var ctrl = this;
    ctrl.color = Home.color;
    ctrl.number = Home.number;
});
