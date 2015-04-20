'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    // 1
    $routeProvider.when('/', {
        templateUrl: 'home.html', controller: 'chooseCtrl'
    });
    $routeProvider.when('/container', {
        templateUrl: 'container.html', controller: 'chooseCtrl'
    });
    $routeProvider.when('/components', {
        templateUrl: 'components.html', controller: 'chooseCtrl'
    });

    $routeProvider.otherwise('/');
});

app.controller('chooseCtrl', function ($scope)
{
    $scope.name = {};
    $scope.$root.view = true;
    var index = 2;
    $scope.list = [1];
    $scope.add = function ()
    {
        $scope.list.push(index);
        index++;
    };
});

app.directive('myContainer', function ()
{
    return {
        restrict: 'E', transclude: true, scope: {
            title: '@'
        }, template: '<div class="my-container text-center">\n    <div class="alert-info"> {{title}}</div>\n    <div ng-transclude></div>\n</div>'
    };
});
app.directive('myComponent', function ()
{
    return {
        restrict: 'E', scope: {
            name: '@'
        }, template: '<div class="text-center my-components">\n    <div>{{name}}</div>\n</div>'
    };
});
