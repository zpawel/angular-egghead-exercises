'use strict';

var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', function ($scope)
{
    $scope.description = {
        element: {
            name: 'restrict E',
            call: '<this element is using restrict E directive>'
        },
        attribute: {
            name: 'restrict A',
            call: '<this element is using restrict A directive>'
        },
        class: {
            name: 'restrict C',
            call: '<this element is using restrict C directive>'
        }
    };
}]);
