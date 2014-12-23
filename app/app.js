var provider = angular.module("provider", []);

provider.config(function ($routeProvider) {

});

var productCatch;
var appCtrl = provider.controller('appCtrl', function ($scope) {
    $scope.error = 'Bad redirect move to display page.';

});
provider.controller('catchErrorCtrl', function ($rootScope, $location, $scope) {
    $scope.product = {};

});

appCtrl.error = function ($q, $timeout) {

};