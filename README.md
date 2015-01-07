##Exercise 21 : scope vs $scope
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-scope-vs-scope](https://egghead.io/lessons/angularjs-scope-vs-scope)
* [angulars-controller-as-syntax/](http://toddmotto.com/digging-into-angulars-controller-as-syntax/)

###Exercise
* bind new element in ```index.html``` use ```separateScope```  directive
* use this restrict: "E", replace: true, template: ```<div> <input type="text" ng-model="input"><div>``` in ```unitScope``` and ```separateScope``` directives
*  add to **otherScopeFactory** factory functions : ```set``` and ```get```, which set and get value
* use watch in function ```link``` to set value from separate scope  ```scope.$watch("input", function (newValue) {});```
* add to controller ```$scope```
* complete method ```unitScope``` and ```separateScope``` in controller to add value from unit scope and separate scope
* in directive ```separateScope``` set ```scope:{}```
* use this ```restrict: "E", replace: true, template: '<div> <input type="text" ng-model="input"><div>'``` in  ```unitScope``` directive

Good luck!