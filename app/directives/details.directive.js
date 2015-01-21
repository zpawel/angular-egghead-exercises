(function ()
{
  'use strict';
  angular.module('countryStateCity').directive('detail', function ()
  {
    return {
      restrict: 'E',
      scope: {},
      replace:true,
      controller: 'detailsCtrl as detailsCtrl',
      link: function ()
      {

      }
    };
  });
})();