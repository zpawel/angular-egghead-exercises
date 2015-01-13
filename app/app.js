(function ()
{
  'use strict';

  var provider = angular.module('provider', []);

  provider.config(function ($routeProvider)
  {

  });

  provider.controller('appCtrl', function ($scope, $routeParams)
  {
    $scope.$root.condition = true;
  });
})();