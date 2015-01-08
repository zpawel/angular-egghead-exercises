var app = angular.module("boxApp", []);

app.controller("BoxCtrl", function ($scope)
{
    $scope.showInside = function (size, name, color)
    {
        alert("My name is : " + name + ". I'm " + size + " and " + color)
    }
});

app.directive("box", function () {
    return {
        template: '<div class="col-md-4"><div class="panel panel-default">' +
            '<div class="panel-heading">{{name}}</div><div class="panel-body">' +
            '<div class="form-group"> ' +
            '<label for="name" class="label label-default">Name</label> ' +
            '<input type="text" id="name" class="form-control">' +
            '</div>' +
            '<div class="form-group"> ' +
            '<label for="color" class="label label-default">Color</label>' +
            '<select id="color" ng-options="color for color in colors" class="form-control"></select>' +
            '</div>' +
            '<div class="form-group"> ' +
            '<label for="size" class="label label-default">Size</label>' +
            '</div>'+
            '<div class="btn btn-default">Tell me about yourself!</div></div></div></div>'

    }
});
