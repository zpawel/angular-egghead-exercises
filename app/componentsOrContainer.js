var containerOrComponents = angular.module("containerOrComponents", ['ngRoute']);

containerOrComponents.config(function ($routeProvider) {
  // 1

});
containerOrComponents.controller('chooseCtrl', function ($scope) {
  $scope.name = {};
  $scope.$root.view = true;
  var index = 2;
  $scope.list = [1];
  $scope.add = function () {
    $scope.list.push(index);
    index++;
  };
});

containerOrComponents.directive('myContainer', function () {
  //2
  return {

  }
});
containerOrComponents.directive('myComponents', function () {
  //2
  return {

  }
});