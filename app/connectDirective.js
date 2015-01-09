(function () {
  'use strict';

  var exercise = angular.module("exercise", ['ngRoute']);

  exercise.config(function ($routeProvider) {
    //here writing routing

  });
  exercise.controller('app', function ($scope) {
    $scope.$root.error = true;
  });

  exercise.controller('firstCtrl', function ($location) {
    this.firstChange = function () {
      $location.path('/first');
    };
  });

  exercise.controller('secondCtrl', function ($location) {
    this.secondMessage = "When you write 'first' you use function firstChange in firstCtrl.";
    this.secondChange = function () {
      $location.path('/second');
    };
  });
  exercise.controller('thirdCtrl', function () {
    this.thirdMessage='Good luck!';
  });

  exercise.directive('firstDirective', function () {
    return {
      //set correct property
    };
  });

  exercise.directive('secondDirective', function () {
    return {
      //set correct property
    };
  });

  exercise.directive('thirdDirective', function ($location) {
    return {
      //set correct property
      restrict: 'E',
      require: ['^firstDirective', '^secondDirective'],
      controller:'thirdCtrl as third',
      template: '<div>' +
      '<div class="text-muted">' +
        //here display message
      '</div>' +
      '<div class="form-group">' +
      '<label>Write something:</label>' +
        //here add input
      '</div>' +
      '<div class="btn btn-success" ng-click="changeValue()">Change page</div>' +
      '</div>', link: function (scope, element, attrs, ctrls) {
        //set correctly property and complete function
        scope.changeValue = function () {

        };
      }
    };
  });
})();