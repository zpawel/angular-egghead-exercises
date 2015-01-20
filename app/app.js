(function ()
{
  'use strict';

  var exercise = angular.module('simpleExercise', ['ngRoute']);

  exercise.config(function ($routeProvider, $provide)
  {
    $routeProvider.when('/', {
      templateUrl: 'home.html', controller:'setCtrl as setCtrl'
    });
    $routeProvider.when('/display', {
      templateUrl: 'resolveOrReject.html', controller: 'appCtrl as appCtrl'
    });
    $routeProvider.otherwise('/');

    $provide.service('promises', function ($q)
    {
      var success, unSuccess;
      return {
        set: function (successValue, unSuccessValue)
        {
          success = successValue;
          unSuccess = unSuccessValue;
        },
        getSuccess: function ()
        {

        },
        getUnSuccess: function ()
        {

        }
      };
    });
  });

  exercise.controller('setCtrl',function(promises){
    this.set = function (value)
    {
      if (value && value.success && value.unSuccess) {


      }
    };
  });


  exercise.controller('appCtrl', function ()
  {

    this.get = function ()
    {

    };
  });

  exercise.controller('unSuccessCtrl',function(){

    this.getUnSuccess = function ()
    {


    };
  });

  exercise.directive('resolveSuccessPromise', function ()
  {
    return {
      scope:{},
      restrict: 'E',
      controller: 'unSuccessCtrl as unSuccessCtrl',
      template:'<div class="form-group">\n    <button class="btn btn-warning"> Get un success value from directive</button>\n    <span>\n        <span class="form-group">\n            \n        </span>\n    </span>\n</div>'
    };
  });
})();