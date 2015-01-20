(function ()
{
  'use strict';
  var containerOrComponents = angular.module('containerOrComponents', ['ngRoute']);

  containerOrComponents.config(function ()
  {

  });
  containerOrComponents.controller('chooseCtrl', function ($scope)
  {
    $scope.name = {};
    $scope.$root.view = true;
    var index = 2;
    $scope.list = [1];
    $scope.add = function ()
    {
      $scope.list.push(index);
      index++;
    };
  });

  containerOrComponents.directive('myContainer', function ()
  {
    return {

    };
  });
  containerOrComponents.directive('myComponents', function ()
  {
    return {

    };
  });
})();