var appScope = angular.module("appScope", []);

appScope.controller("scopeCtrl", [function () {
    this.unitScope = function () {

    };
    this.separateScope = function () {

    }
}]);

appScope.factory('otherSCopeFactory', function () {
    var valueFromScope;
});

appScope.directive("unitScope", function () {
    return {

    }
});
