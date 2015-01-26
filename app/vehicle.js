var app = angular.module("app", []);

app.directive("vehicle", function ()
{
    return {
        restrict: "E",
        transclude: true,
        controller: function ()
        {
            this.drive = function (speed, vehicle)
            {
                return "I'm fast " + vehicle + "! " + speed + " km/h! Whoa!";
            };

            this.alarm = function ()
            {
                alert("Beeeeeeep!");
            };

        },
        template: '<div ng-transclude></div>'
    }
});

app.directive("car", function ()
{
    return {
        restrict: "E",
        require: "^vehicle",
        transclude: true,
        controller: function ()
        {
            this.emergencyBrake = false;
        },
        link: function (scope, element, attrs, clientCtrl)
        {
        },
        template: '<div class="col-md-6">' +
                '<img class="text-center" src="assets/car.png">' +
                '<div class="page-header"><strong>You are in the car</strong></div>' +
                '<div ng-transclude></div></div>'
    }
});

app.directive("bus", function ()
{
    return {
        restrict: "E",
        require: "^vehicle",
        transclude: true,
        controller: function ()
        {
            this.emergencyBrake = true;

        },
        link: function (scope, element, attrs, clientCtrl)
        {

        },
        template: '<div class="col-md-6">' +
                '<img class="text-center" src="assets/bus.png">' +
                '<div class="page-header"><strong>You are in the bus</strong></div >' +
                '<div ng-transclude></div></div>'

    }
});

app.directive("audi", function ()
{
    return {
        restrict: "E",
        link: function (scope, element, attrs, ctrls)
        {
            scope.speed = 80;
            scope.setSpeed = function (speed)
            {
//                scope.driveSpeed
            };
            scope.isClicked = function ()
            {

            };
        },
        template: '<div class="col-md-4">' +
                '<input class="form-control" type="number" ng-model="speed"></div>' +
                '<div class="btn-group"><button class="btn btn-default" ng-click="setSpeed(speed)">Drive!</button>' +
                '<button class="btn btn-default">Emergency brake!</button></div><h3></h3>'

    }
});

app.directive("jelcz", function ()
{
    return {
        restrict: "E",
        controller: function ()
        {
        },
        link: function (scope, element, attrs, ctrls)
        {
            scope.speed = 12;
            scope.setSpeed = function (speed)
            {
//                scope.driveSpeed
            };

            scope.isClicked = function ()
            {

            };
        },
        template: '<div class="col-md-4"><input class="form-control" type="number" ng-model="speed"></div>' +
                '<div class="btn-group"><button class="btn btn-default" ng-click="setSpeed(speed)">Drive!</button>' +
                '<button class="btn btn-default">Emergency brake!</button></div><h3></h3>'

    }
});