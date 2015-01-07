var element = angular.module("elementApp", []);

element.directive("findElement", function ()
{
    var element = angular.element("<h3></h3>");

    var link = function (scope)
    {
    //  add watch
    };

    return {
        restrict: "E",
        replace: true,
        compile: function (templateElement)
        {
            templateElement.append(element);
            return link;
        }
    }
});