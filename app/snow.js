'use strict';

var app = angular.module('app', []);

app.controller('SnowCtrl', function ($scope)
{
    $scope.snow = [];

//    addPetal function
    $scope.addPetal= function(){
        $scope.snow.push({petal: '*'})

    },
//    removePetal function
    $scope.removePetal= function(){
        $scope.snow.splice(0,1)
    }
});

//    add enter directive
app.directive("enter", function(){
    return function(scope, element, attrs){
    element.bind("mouseenter", function(){
        scope.$apply(attrs.enter);
        console.log(scope.snow)
    })
    }

})
    //app.directive("enter", function(){
    //    return function(scope, element, attrs){
    //        element.bind("mouseenter", function(){
    //            scope.removePetal(snow)
    //        })
    //    }
    //
    //})