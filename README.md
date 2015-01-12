##Exercise 22 : templateUrl
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-templateurl](https://egghead.io/lessons/angularjs-templateurl)
* [angularjs-ngIf](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise

* in index.html
    * use directive```<url title="{{title}}">The content is: {{content}}</url>``` and add when title  is **secret** display ```Good, work you display this secret```
     when is other display ```The content is: {{content}}```
* you must set correct properties in directive
    * hint:transclude, templateUrl and scope.

* in you script  **urlTemplate.html**
    * use ```ng-transclude``` in your script
    * with using ```ng-if``` in your script you display button that, when after clicked displays the **content** ```!(!value || 0 === value.length);```
        (you don't use $watch complete function ```isTitleVisible```)
    * you must hide content with using ```ng-show``` ```<div ng-show="isContentVisible" ng-transclude></div>```
    * set correct properties in directive: scope,transclude and templateUrl.

Good luck!