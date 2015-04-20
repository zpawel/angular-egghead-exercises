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
            $scope.show = true;
        }
    };

    $scope.checkNow = function ()
    {
        $timeout(function ()
        {
            //here you should use partsList.set()
            $injector.invoke(function (partsList)
            {
                if ($scope.data && partsList.set($scope.carPart)) {
                    $scope.messageClass = 'text-success';
                    $scope.resultInvoke = 'This part is available and is very cheap';
                } else {
                    $scope.messageClass = 'text-danger';
                    $scope.resultInvoke = 'This part is NOT available and is very expensive...';
                }
            });

            $scope.result = true;
        }, 10);
    };
    $scope.wait = function ()
    {
        $timeout(function ()
        {
            //here you should use partsList.setToTrue()
            $injector.invoke(function (partsList)
            {
                if ($scope.data && partsList.setToTrue($scope.carPart)) {
                    $scope.messageClass = 'text-success';
                    $scope.resultInvoke = 'This part is available and is very cheap';
                }
            });
            $scope.result = true;
        }, 1800);
    };
});
