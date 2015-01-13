(function ()
{
  'use strict';

  var carService = angular.module('carService', []);

  carService.config(function ($routeProvider, $provide)
  {
    // 1

    $provide.provider('listParts', function ()
    {
      var lists = [{
        name: 'engine', enable: false
      }, {
        name: 'brakes', enable: true
      }, {
        name: 'steering wheel', enable: true
      }, {
        name: 'wheel', enable: false
      }, {
        name: 'windows', enable: false
      }];
      var set = function (value)
      {
        //2

      };
      var setToTrue = function (value)
      {
        var tmp;
        angular.forEach(lists, function (part)
        {
          if (value === part.name) {
            part.enable = true;
            tmp = part;
          }
        });
        return tmp.enable;
      };
      return {
        $get: function ()
        {
          return {
            //2

          };
        }
      };
    });

  });

  carService.controller('carPartsCtrl', function ($scope, listParts, $location)
  {
    $scope.lists = listParts.lists;
    //4
    $scope.choose = function ()
    {
      $location.path('/choose');
    };
  });
  carService.controller('chooseCtrl', function ($scope, $timeout, $injector)
  {
    $scope.$root.view = true;
    $scope.result = false;
    $scope.toogle = false;
    $scope.message = 'Wait.......';
    //3

    $scope.wait = function ()
    {
      $timeout(function ()
      {
        $injector.invoke(function ()
        {
          //3
          $scope.resultInvoke = 'Please, complete this method.';
        });
        $scope.result = true;
      }, 5000);
    };
  });
})();