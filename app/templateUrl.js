'use strict';
var app = angular.module('app', []);

app.directive('url', function ()
{
    return {
        restrict: 'E',
        scope: {
            title: '@', data: '@'
        },
        template: '<button ng-click="content()" class="btn btn-info" ng-if="isTitleVisible(title)">\n    {{title}}\n</button>\n<div class="form-group" ng-show="isContentVisible">\n    <span ng-if="\'secret\'!==title">The data is: {{data}}</span>\n    <span class="text-success" ng-if="\'secret\'===title">Good, work you display this secret</span>\n</div>\n',
        link: function (scope)
        {
            scope.isTitleVisible = function (value)
            {
                return !(!value || 0 === value.length);
            };
            scope.content = function ()
            {
                scope.isContentVisible = !scope.isContentVisible;
            };
        }
    };
});
