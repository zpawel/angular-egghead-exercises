(function ()
{
  'use strict';

  var provider = angular.module('provider', ['ngRoute']);

  provider.config(function ($routeProvider)
  {
    //write routing
    $routeProvider.when('/', {
      controller: 'routing', templateUrl: 'home.html'
    });
  });

  provider.controller('routing', function ($scope)
  {
    $scope.$root.condition = true;

    this.display = function ()
    {
      this.message = this.message ? '' : 'I came from a controller';
    };
    $scope.routing = this;
  });
})();