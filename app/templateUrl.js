(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.run(function ()
    {
        var template = [];
        template[0] = '<div>Default template:</div>\n<h3>{{order}} x {{quantity}}</h3>';
        template[1] =
                '<div>Button template:</div>\n<div>\n    <h3 ng-click="content()" class="btn btn-default">Click to see the order</h3>\n    <div ng-show="isContentVisible">\n        <h3 ng-if="quantity > 1" class="form-group">Your order: {{quantity}} {{order}}s</h3>\n        <h3 ng-if="quantity == 1" class="form-group">Your order: {{quantity}} {{order}}</h3>\n    </div>\n</div>';
        template[2] =
                '<h4>Table template:</h4>\n<table class="table table-bordered">\n    <thead>\n    <tr>\n        <th class="text-center">Order</th>\n        <th class="text-center">Quantity</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>{{order}}</td>\n        <td>{{quantity}}</td>\n    </tr>\n    </tbody>\n</table>';
    });

    app.controller('urlCtrl', function ($scope)
    {
        $scope.order = 'pizza';
        $scope.quantity = 12;

    });
    app.directive('url', function ($compile)
    {

        var link = function (scope, element)
        {
            scope.$watch(function ()
            {

            }, function ()
            {

                $compile(element.contents())(scope);
            });
            scope.isContentVisible = false;

            scope.content = function ()
            {
                scope.isContentVisible = !scope.isContentVisible;
            };
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                order: '@', quantity: '@'
            }, link: link
        };
    });
})();