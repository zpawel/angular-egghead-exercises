(function ()
{
  'use strict';

  var provider = angular.module('provider', []);

  provider.config(function ()
  {

  });

  provider.controller('appCtrl', function ($scope)
  {

    this.display = function ()
    {
      this.message = this.message ? '' : 'I came from a controller';
    };
  });
})();