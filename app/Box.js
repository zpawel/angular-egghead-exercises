'use strict';
var app = angular.module('boxApp', []);

app.controller('BoxCtrl', function ($scope)
{
    $scope.showInside = function (size, name, color)
    {
        alert('My name is : ' + name + '. I am ' + size + ' and ' + color);
    };
});

app.directive('box', function ()
{
    return {
        restrict: 'E',
        scope: {
            color: '=',
            size: '@',
            open: '&'
        },

        template: '<div class="col-md-4"><div class="panel panel-default">' +
                '<div class="panel-heading">{{name}}</div><div class="panel-body" style="min-height: 400px;">' +
                '<div class="form-group"> ' +
                '<label for="name" class="label label-default">Name</label> ' +
                '<input type="text" id="name" class="form-control" ng-model="name"></div>' +
                '<div class="form-group"> ' +
                '<label for="color" class="label label-default">Color</label>' +
                '<select id="color" class="form-control"></select></div>' +
                '<div class="form-group text-center"> ' +
                '<div class="btn btn-default">Tell me about yourself!</div></div>' +
                '<div class="form-group"> ' +
                '<label for="size" class="label label-default">Size</label>' +
                '<h3 id="size"></h3>' +
                '<div class="square" ng-style="{\'background-color\':color, \'width\':size, \'height\':size}"></div></div>' +
                '</div></div>',

        link: function (scope)
        {
            scope.name = 'Box';
            scope.colors = ['red', 'green', 'blue'];
            scope.color = scope.colors[0];
        }
    };
});
