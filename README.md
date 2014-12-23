##Exercise 23 : templateCache
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [https://egghead.io/lessons/angularjs-templateurl](https://egghead.io/lessons/angularjs-templateurl)

###Before you start, please read
* [https://docs.angularjs.org/api/ng/directive/ngIf](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise
* with using ```ng-if``` it display button which, when after clicked displays the ```content``` use this condition ```!(!value || 0 === value.length);``` (you don't use $watch)
use ```"isTitleVisible(title)```
* you must set correct properties in directive
* use directive```<url title="{{title}}">The content is: {{content}}</url>```
* in ```templateUrl``` you must hide content0 with using ```ng-show``` ```<div ng-show="isContentVisible" ng-transclude></div>```
* or refactor previous exercise





Good luck!