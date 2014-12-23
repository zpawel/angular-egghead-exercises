##Exercise 21 : scope vs $scope
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [https://egghead.io/lessons/angularjs-scope-vs-scope](https://egghead.io/lessons/angularjs-scope-vs-scope)

###And read this about syntax Controller as syntax:
* [http://toddmotto.com/digging-into-angulars-controller-as-syntax/](http://toddmotto.com/digging-into-angulars-controller-as-syntax/)

###Exercise
* bind new element in ```index.html``` using directive
* write factory to share value from scope
* write in factory method ```set``` and ```get``` value
* use watch to set value from separate scope  ```scope.$watch("input", function (newValue) {});```
* write method ```unitScope``` and ```separateScope``` in controller to bind value from unit scope and separate scope
* in directive ```separateScope``` set ```scope:{}```
* use this ```restrict: "E", replace: true, template: '<div> <input type="text" ng-model="input"><div>'``` in  ```unitScope``` directive

Good luck!