(function ()
{
    'use strict';

    var app = angular.module('app', []);

    //add routing

    app.controller('routeCtrl', function ($scope)
    {
        $scope.$root.condition = true;

        this.display = function ()
        {
            this.message = this.message ? '' : 'I came from a routeCtrl';
        };
        $scope.routing = this;
    });
})();