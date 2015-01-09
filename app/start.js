(function () {
  'use strict';

  var start = angular.module('start', ['ngRoute']);

  start.config(function ($routeProvider, $provide) {
    //here writing routing

    $provide.factory('simpleFactory', function () {
      var listUser=[{
                      name: 'Adam', lastName: 'Hart',country:'Poland'
                    }, {
                      name: 'Antonio', lastName: 'Turner',country:'England'
                    }, {
                      name: 'Jimmy', lastName: 'Wright',country:'USA'
                    }, {
                      name: 'Shirley', lastName: 'Harper',country:'Italian'
                    }, {
                      name: 'Randy', lastName: 'Watson',country:'Greece'
                    }, {
                      name: 'Gregory', lastName: 'Banks',country:'German'
                    }, {
                      name: 'Martha', lastName: 'Lawson',country:'China'
                    }, {
                      name: 'Eugene', lastName: 'Stanley',country:'Cuba'
                    }, {
                      name: 'Randy', lastName: 'Reyes',country:'Egypt'
                    }, {
                      name: 'Christopher', lastName: 'Ferguson',country:'France'
                    }];
      return {
        get:function(){
          //return object list with value listUser
        }
      };
    });
  });

  start.controller('appCtrl', function ($scope) {
    $scope.$root.error = true;
  });
  start.controller('viewCtrl',function(simpleFactory){
    //append listUsers from factory to user
    this.toggle=function(index){
      //complete function
    };
  });

})();