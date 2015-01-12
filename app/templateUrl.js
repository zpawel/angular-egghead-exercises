(function () {
  'use strict';

  var candyTemplateUrl = angular.module('templateUrl', []);

  candyTemplateUrl.run(function () {
  });


  candyTemplateUrl.directive('url', function () {
    return {
      link: function (scope) {

        scope.isContentVisible = false;
        scope.isCandyVisible = function (value) {

        };
        scope.content = function () {

        };
      }
    };
  });
})();