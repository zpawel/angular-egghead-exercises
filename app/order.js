'use strict';

var app = angular.module('app', []);

app.factory('Order', function ($q)
{
    var names = [];
    var quantities = [];
    return {
        add: function (name, quantity)
        {
            names.push(name);
            quantities.push(quantity);
        },

        getItem: function (index)
        {

        },

        getQuantity: function (index)
        {

        }
    };
});
app.controller('orderCtrl', function ($scope, $timeout, Order)
{
    var index = 0;
    $scope.name = 'Pasta';
    $scope.quantity = 4;
    $scope.orders = {name: [], quantity: []};

    $scope.addOrder = function (name, quantity)
    {

        if (name !== null && name !== undefined && quantity !== null && quantity !== undefined) {
            Order.add(name, quantity);
            $scope.added = true;
            $timeout(function ()
            {
                $scope.added = false;
            }, 1000);
            $scope.name = null;
            $scope.quantity = null;
        }
    };


    $scope.success = function ()
    {

    };
});
