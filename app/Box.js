var app = angular.module("boxApp", []);

app.controller("BoxCtrl", function ($scope)
{
    $scope.showInside = function (size, name, color)
    {
        alert("My name is : " + name + ". I'm " + size + " and " + color)
    }
});

<!--add box directive-->