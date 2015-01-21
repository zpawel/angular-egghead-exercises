(function ()
{
  'use strict';
  angular.module('countryStateCity').controller('countryCtrl', function (storage)
  {
    this.country = storage.getListCountry();
  });
})();