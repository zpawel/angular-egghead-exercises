(function () {
  'use strict';

  var templateUrl = angular.module('templateUrl', []);
  templateUrl.directive('url', function () {
    return {
      restrict: 'E', scope: {
        title: '@',
        data:'@'
      }, templateUrl: 'urlTemplate.html', link: function (scope) {
        scope.isTitleVisible = function (value) {

        };
        scope.content = function () {
          scope.isContentVisible = !scope.isContentVisible;
        };
      }
    };
  });
})();