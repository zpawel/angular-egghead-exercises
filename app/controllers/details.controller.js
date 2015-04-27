(function () {
    'use strict';
    angular.module('countryStateCity').controller('detailsCtrl', function ($scope, storage) {
        $scope.chooseCity = function (country, state) {
            if (country && state) {
                return storage.getDetails(country, state);
            }
        };
    });
})();
