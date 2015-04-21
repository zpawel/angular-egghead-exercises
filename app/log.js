'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'displayLog.html'
    });
    $routeProvider.when('/check', {
        templateUrl: 'checkLog.html'
    });
    $routeProvider.otherwise('/');
});
app.controller('displayLog', function ($scope, $location, $log)
{
    $scope.list = ['Do nothing', 'Do nothing', 'Show log', 'Do nothing', 'Do nothing', 'Do nothing', 'Show log', 'Do nothing', 'Do nothing'];
    $scope.addClass = function (value)
    {
        if (3 === value || 7 === value) {
            return 'btn btn-info';
        } else {
            return 'btn btn-default';
        }
    };
    $scope.display = function (event)
    {
        $scope.pageX = event.pageX;
        $scope.pageY = event.pageY;
        $scope.eventId = Number(event.toElement.id);

    };
});

