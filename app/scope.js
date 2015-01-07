var appScope = angular.module("appScope", []);

appScope.controller("scopeCtrl", [function () {
    this.unitScope = function () {

    };
    this.separateScope = function () {

    }
}]);

appScope.factory('otherSCopeFactory', function () {
    var valueFromScope;
    return {
        set: function (value) {

        },
        get: function () {

        }
    };
});

appScope.directive("unitScope", function () {
    return {

    }
});
