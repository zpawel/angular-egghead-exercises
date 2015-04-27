(function () {
    'use strict';
    angular.module('countryStateCity').controller('stateCtrl', function (storage) {
        this.chooseCountry = function (country) {
            return storage.getListState(country);
        };
    });
})();
