angular.module('app', ['ngRoute', 'ngResource']).config(['$routeProvider', '$httpProvider', function (Router, $http)
{
    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];
}]);
