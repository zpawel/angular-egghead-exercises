##Exercise 28 : Directive for route handling
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-directive-for-route-handling](https://egghead.io/lessons/angularjs-directive-for-route-handling)

###Exercise
* add to ```way.js``` file ```error``` directive with ```$rootScope``` as an argument
* add to directive 
    * restrict **E**
    * template ```<div class="text-center alert alert-danger">{{alertMessage}}</div>```
    * link function with ``` $rootScope.$on``` which intercept a route change error.
    * inside set ```wrongWay``` variable to **true** and ```alertMessage``` to message: **No, no, no. That is not good way!**
    * bind **wrongWay** with **ng-show** directive in template
    * add to ```index.html``` file **error** directive and check how it work

Good luck!