##Exercise 23 : templateCache
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-templateCache](https://egghead.io/lessons/angularjs-templatecache)
* [angularjs-ng-if](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise
* with using ```ng-if``` in your script you display button that, when after clicked displays the content ```!(!value || 0 === value.length);```
(you don't use $watch complete function ```isCandyVisible```)
* you must set correct properties in directive
* use directive```url``` to display ```order``` and ```quantity``` when quantity is less than 100 display ```You order: {{quantity}} candy.```, when  quantity is bigger display image and ```You ordered a lot of candy.```
* in templateUrl you must hide ```quantity``` with using ```ng-show``` ```<div ng-show="isContentVisible" ng-transclude></div>```


Good luck!