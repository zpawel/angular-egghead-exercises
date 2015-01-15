(function ()
{
  'use strict';

  var provider = angular.module('provider', ['ngRoute']);
  provider.config(function ($routeProvider)
  {
    $routeProvider.when('/', {
      templateUrl: 'home.html', controller: 'addCtrl as addCtrl'
    }).when('/display', {
      templateUrl: 'display.html', controller: 'displayCtrl as display'
    }).otherwise('/');
  });

  provider.factory('storage', function ($q)
  {
    var name = [];
    var quantity = [];
    return {
      add: function (nameInput, quantityInput)
      {
        name.push(nameInput);
        quantity.push(quantityInput);
      }, getItem: function (index)
      {


      }, getQuantity: function (index)
      {

      }, clear: function ()
      {
        name.length = 0;
        quantity.length = 0;
      }
    };
  });
  provider.controller('addCtrl', function ($scope, $timeout, storage)
  {
    $scope.$root.error = true;
    $scope.add = function (name, quantity)
    {
      if (name && quantity) {
        storage.add(name, quantity);
        $scope.added = true;
        $timeout(function ()
        {
          $scope.added = false;
        }, 500);
      }
      $scope.name = null;
      $scope.quantity = null;
    };

  });
  provider.controller('displayCtrl', function ($scope, storage)
  {
    this.clear = function ()
    {
      storage.clear();
    };

    $scope.item = {name: [], quantity: []};

    var index = 0;
    $scope.success = function ()
    {

    };
  });
})();