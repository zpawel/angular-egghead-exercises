(function () {
    'use strict';
    angular.module('countryStateCity').directive('country', function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            controller: 'countryCtrl as countryCtrl',
            templateUrl: 'templates/country.tpl.html'
        };
    });
})();
