(function ()
{
  'use strict';

  var provider = angular.module('provider', ['ngRoute']);

  provider.config(function ()
  {

  });

  provider.controller('appCtrl', function ($scope, $routeParams)
  {
    $scope.$root.condition = true;
    $scope.brand = $routeParams.brand;
    $scope.capacity = $routeParams.capacity;
  });
})();