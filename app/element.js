var element = angular.module("elementApp", []);

element.directive("findElement", function ()
{
    var element = angular.element("<h3></h3>");

    var link = function (scope)
    {

    };

    return {
        restrict: "E", replace: true, template: '<div> <input class="form-control" type="text" ng-model="input"><div>', compile: function (templateElement)
        {
            templateElement.append(element);
            return link;
        }
    }
});