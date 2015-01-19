var journeyApp = angular.module("journeyApp", ["ngRoute"]);

journeyApp.config(function ($routeProvider, $locationProvider)
{
    $routeProvider.when('/', {
        templateUrl: "start.html",
        controller: "StartCtrl"
    }).when('/home', {
        templateUrl: 'home.html',
        controller: "HomeCtrl",
        resolve: {
            loadData: StartCtrl.loadHome
        }
    }).when('/forest', {
        templateUrl: 'forest.html',
        controller: "ForestCtrl",
        resolve: {
            loadData: StartCtrl.loadForest
        }
    }).otherwise({
        redirectTo: '/'
    })
});

journeyApp.controller("JourneyCtrl", function ($scope, $rootScope, $route, $location)
{
    $scope.things = [
        {name: "basket" },
        {name: "chicken"},
        {name: "apples"},
        {name: "phone"},
        {name: "matches"}
    ];
    $scope.data = {selectedThing: $scope.things[0].name};

    $rootScope.$on("$routeChangeStart", function (event, current, previous, resolve)
    {
        <!-- set start message-->

    });
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous, resolve)
    {

        if (undefined != current.locals.loadData) {
            <!-- set mission-->
        }
    });
});

var StartCtrl = journeyApp.controller("StartCtrl", function ($scope, $route, $location, $timeout)
{
    <!--set alert message-->
});

journeyApp.controller("HomeCtrl", function ($scope, loadData, $template)
{
    <!-- set controller message-->
});

journeyApp.controller("ForestCtrl", function ($scope, loadData, $template)
{
    <!-- set controller message-->
});

StartCtrl.loadHome = function ($q, $timeout)
{
    var defer = $q.defer();
    $timeout(function ()
    {
        defer.resolve({
            message: "...in the kitchen.",
            space: "Kitchen"
        });
    }, 500);
    return defer.promise;
};

StartCtrl.loadForest = function ($q, $timeout)
{
    var defer = $q.defer();
    $timeout(function ()
    {
        defer.resolve({
            message: "...in the deep, deep wood.",
            space: "Wood"
        });
    }, 500);
    return defer.promise;
};