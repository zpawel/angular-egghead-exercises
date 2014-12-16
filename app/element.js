var element = angular.module("elementApp", []);

element.directive("findElement", function () {
    var element = angular.element("<div></div>");

    var link = function (scope) {

    };

    return {
        restrict: "E", replace: true, template: '<div> <input type="text" ng-model="input"><div>', compile: function (templateElement) {
            templateElement.append(element);
            return link;
        }
    }
});