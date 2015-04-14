'use strict';

var element = angular.module('elementApp', []);

element.directive('findElement', function ()
{

    //create link function
    var link = function (scope)
    {

    };

    return {
        replace: true,
        template: '<div> <input class="form-control" type="text" ng-model="input"></div>',
        compile: function (templateElement)
        {

        }
    };
});

