var log = angular.module("log", ['ngRoute']);

log.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'displayLog.html'
  });
  $routeProvider.when('/checkLog', {
    templateUrl: 'checkLog.html'
  });
  $routeProvider.otherwise('/')
});
log.controller('displayLog', function ($scope, $location, $log) {
  $scope.list =
      ['Nothing doing', 'Nothing doing', 'Nothing doing', 'Nothing doing','Show log', 'Nothing doing',  'Nothing doing', 'Nothing doing', 'Nothing doing','Show log']
  $scope.addClass=function(value){
    //3

  };
  $scope.display = function (ev) {
    //3

  }
});