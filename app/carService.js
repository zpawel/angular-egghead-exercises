(function ()
{
  'use strict';

  var carService = angular.module('carService', ['ngRoute']);

  carService.config(function ($routeProvider, $provide)
  {
    $routeProvider.when('/', {
      templateUrl: 'home.html', controller: 'carPartsCtrl'
    });
    $routeProvider.when('/choose/:item', {
      templateUrl: 'choosePart.html', controller: 'chooseCtrl'
    });

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
        //  complete this method
      };
      var setToTrue = function (value)
      {
        //  complete this method
      };
      return {
        $get: function ()
        {
          return {
            set: set, setToTrue: setToTrue, lists: lists
          };
        }
      };
    });
  });

  var carPartsCtrl = function (scopeA, list)
  {
    scopeA.$root.view = true;
    scopeA.lists = list.lists;
    //4
    scopeA.data = {lists: scopeA.lists[0].name};
  };


  carService.controller('carPartsCtrl', carPartsCtrl);


  var chooseCtrl = function (scopeB, waitForMe, injector, parameterFromUrl)
  {
    scopeB.result = false;
    scopeB.toogle = false;
    scopeB.message = 'Wait.......';
    scopeB.data = parameterFromUrl.item;
    scopeB.checkNow = function ()
    {
      waitForMe(function ()
      {
        //here you should use listParts.set()

      }, 10);
    };
    scopeB.wait = function ()
    {
      waitForMe(function ()
      {
        //here you should use listParts.setToTrue()

      }, 600);
    };
  };


  carService.controller('chooseCtrl', chooseCtrl);
})();