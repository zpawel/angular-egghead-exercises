'use strict';

var app = angular.module('app', []);

app.directive('hero', function() {
    return{
        restrict: "E",
        template:'<div> <img src="assets/hero.png" class="hero-position" width="300px"></div>'
    }
});

app.directive('mask', function() {
    return{
        restrict: "E",
        template:'<div> <img src="assets/mask.png" class="mask-position" width="62px"></div>'
    }
});
app.directive('superhero', function() {
    return{
        restrict: "E",
        template:'<div class="relative-position"><hero></hero><mask></mask></div>'
    }
});