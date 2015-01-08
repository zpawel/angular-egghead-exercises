var exercise = angular.module("simpleExercise", ['ngRoute']);

exercise.config(function ($routeProvider) {

});
exercise.factory('simplePromise', function ($q) {
  var success, unSuccess;
  return {
    set: function (successValue,unSuccessValue) {

    },
    getSuccess: function () {

    },
    getUnSuccess: function () {

    }
  }
});

exercise.controller('exerciseCtrl', function (simplePromise, $location) {
  var ctrl = this;
  this.set = function (value) {

  };
  this.get = function () {

  };
  this.getUnSuccess = function () {

  }

});