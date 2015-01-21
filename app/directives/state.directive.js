(function ()
{
  'use strict';
  angular.module('countryStateCity').directive('state', function ()
  {
    return {
      restrict: 'E',
      scope: {},
      replace:true,
      transclude: true,
      controller: 'stateCtrl as stateCtrl',
      require: '^country',
      templateUrl: 'templates/state.tpl.html',
      link: function (scope)
      {

      }
    };
  });
})();