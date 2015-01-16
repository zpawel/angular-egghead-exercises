(function ()
{
  'use strict';
  var dynamicChangeTemplate = angular.module('dynamicChangeTemplate', []);

  dynamicChangeTemplate.run(function(){
    var template = [];
    template[0] = '<div>Default template:</div>\n<div>{{order}}</div>';
    template[1] = '<div>Button template:</div>\n<div>\n    <h3 ng-click="content()" class="btn btn-info" ng-if="isCandyVisible(order)">{{order}}</h3>\n    <div ng-show="isContentVisible"><div ng-if="order&&quantity > 100" class="form-group">\n        <span>You\'ve ordered a lot of {{order}}s!</span>\n    </div>\n        <div ng-if="quantity < 100 && quantity > 1" class="form-group">Your order: {{quantity}} {{order}}s</div>\n        <div ng-if="quantity == 1" class="form-group">Your order: {{quantity}} {{order}}</div>\n    </div>\n</div>';
    template[2] = '<div>Table template:</div>\n<table class="table table-bordered">\n    <thead>\n    <tr>\n        <th class="col-md-1">Order:</th>\n        <th class="col-md-1">Quantity:</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>{{order}}</td>\n        <td>{{quantity}}</td>\n    </tr>\n    </tbody>\n</table>';
  });

  dynamicChangeTemplate.directive('url', function ($compile)
  {

    var link = function (scope,element)
    {
      scope.$watch(function ()
      {

      }, function ()
      {

        $compile(element.contents())(scope);
      });
      scope.isContentVisible = false;

      scope.isCandyVisible = function (value)
      {
        return !(!value || 0 === value.length);
      };
      scope.content = function ()
      {
        scope.isContentVisible = !scope.isContentVisible;
      };
    };
    return {
      restrict: 'E',
      replace: true,
      scope: {
        order: '@',
        quantity: '@'
      },
      link: link
    };
  });
})();