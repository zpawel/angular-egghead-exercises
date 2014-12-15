var myApp = angular.module("myApp", []);

myApp.controller('restrictECtrl', ['$scope', function ($scope)
{
    $scope.description = {
        name: 'restrict E',
        call: '<restrict-e></restrict-e>'
    };
}]);

myApp.controller('restrictACtrl', ['$scope', function ($scope)
{
    $scope.description = {
        name: 'restrict A',
        call: '<div restrict-a></div>'
    };
}]);

myApp.controller('restrictCCtrl', ['$scope', function ($scope)
{
    $scope.description = {
        name: 'restrict C',
        call: '<div class="restrict-c"></div>'
    };
}]);

myApp.directive("restrictE", function ()
{
    return {
        restrict: "E",
        template: '{{description.name}}: {{description.call}}'
    }
});
