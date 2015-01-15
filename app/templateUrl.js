(function ()
{
  'use strict';

  var candyTemplateUrl = angular.module('templateUrl', []);


  candyTemplateUrl.directive('url', function ()
  {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        quantity: '@'
      },
      templateUrl: 'urlTemplate.html',
      link: function (scope)
      {
        scope.isContentVisible = false;

        scope.isCandyVisible = function (value)
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
})();