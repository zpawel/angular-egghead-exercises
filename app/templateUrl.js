
var templateUrl = angular.module("templateUrl", []);

templateUrl.run(function($templateCache){
    $templateCache.put('urlTemplate.html','<div><h3 ng-click="content()" class="btn btn-info">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>');
});


templateUrl.directive("url", function() {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        templateUrl: 'urlTemplate.html',
        link: function(scope) {
            scope.isContentVisible = false;

            scope.content = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
});