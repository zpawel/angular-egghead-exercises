var candyTemplateUrl = angular.module("templateUrl", []);

candyTemplateUrl.run(function ($templateCache)
{
    $templateCache.put('urlTemplate.html', '<div><h3 ng-click="content()" class="btn btn-info" ng-if="isCandyVisible(title)">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>');
});


candyTemplateUrl.directive("url", function ()
{
    return {
        restrict: "E", transclude: true, scope: {
            title: "@"
        }, templateUrl: 'urlTemplate.html', link: function (scope)
        {
            scope.isContentVisible = false;
            scope.isCandyVisible = function (value)
            {

            };
            scope.content = function ()
            {

            }
        }
    }
});