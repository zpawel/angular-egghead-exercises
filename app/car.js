'use strict';

var app = angular.module('app', []);

app.provider('partsList', function ()
{
    var lists = [{
        name: 'engine', enable: false
    }, {
        name: 'brakes', enable: true
    }, {
        name: 'steering wheel', enable: true
    }, {
        name: 'wheel', enable: false
    }];
    var set = function (value)
    {
        var tmp = {};
        angular.forEach(lists, function (part)
        {
            if (value === part.name) {
                part.enable = !part.enable;
                tmp = part;
            }
        });
        return tmp.enable;
    };
    var setToTrue = function (value)
    {
        var tmp = {};
        angular.forEach(lists, function (part)
        {
            if (value === part.name) {
                part.enable = true;
                tmp = part;
            }
        });
        return tmp.enable;
    };
    return {
        $get: function ()
        {
            return {
                set: set, setToTrue: setToTrue, lists: lists
            };
        }
    };
});

app.controller('carPartsCtrl', function ($scope, partsList, $timeout, $injector)
{
    $scope.lists = partsList.lists;
    $scope.data = {lists: $scope.lists[0].name};
    $scope.result = false;

    $scope.chooseCarPart = function ()
    {
        if ($scope.data.part !== undefined) {
            $scope.carPart = $scope.data.part;
            $scope.returnMessage = '';
            $scope.show = true;
        }
    };

    $scope.checkNow = function ()
    {
        $timeout(function ()
        {
            //complete function

            $scope.result = true;
        }, 10);
    };
    $scope.wait = function ()
    {
        $timeout(function ()
        {
            //complete function

            $scope.result = true;
        }, 1800);
    };
});
