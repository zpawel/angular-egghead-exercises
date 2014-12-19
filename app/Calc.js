var calcApp = angular.module("calcApp", []);

calcApp.controller("SumCtrl", function ($scope)
{
    this.addition = function (a, b)
    {
        alert("a = " + a + "\nb = " + b + "\na + b = " + (a + b));
    };

    return $scope.SumCtrl = this;

});

calcApp.controller("SubCtrl", function ($scope)
{
    this.subtraction = function (a, b)
    {
        alert("a = " + a + "\nb = " + b + "\na - b = " + (a - b));
    };
    return $scope.SubCtrl = this;

});

calcApp.controller("MultiCtrl", function ($scope)
{
    $scope.multiplication = function (a, b)
    {
        alert("a = " + a + "\nb = " + b + "\na * b = " + (a * b));
    };
});

calcApp.controller("DivideCtrl", function ($scope)
{
    $scope.divide = function (a, b)
    {
        alert("a = " + a + "\nb = " + b + "\na / b = " + (a / b));
    };
});

calcApp.directive("multi", function ()
{
    return{
        restrict: "E",
        scope: {
            solve: "&"
        },
        template: ' <div class="btn btn-info" ng-click="solve({a : a, b: b})">Multiple</div>'
    }
});

calcApp.directive("divide", function ()
{
    return{
        restrict: "A",
        scope: {
            solve: "&"
        },
        template: '<div class="btn btn-default" ng-click="solve({a : a, b: b})">Divide</div>'
    }
});
