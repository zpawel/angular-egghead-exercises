var templateUrl = angular.module("templateUrl", []);

templateUrl.directive("url", function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        templateUrl: 'urlTemplate.html',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.isTitleVisible=function(value){

            };
            scope.content = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
});