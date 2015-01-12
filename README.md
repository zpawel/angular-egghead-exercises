##Exercise 23 : templateCache
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-templateCache](https://egghead.io/lessons/angularjs-templatecache)
* [angularjs-ng-if](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise
1. in **index.html**
     * add you directive url with title on set to title from scope
     * when quantity is greater than 100 you should display message You ordered a lot of candy. and image candy <div class="form-group">```here display image```</div>
     * when is quantity is less display message You order: {{quantity}} candy.

2. in templateUrl.js
    * in **candyTemplateUrl.run **
        * use **$templateCache.put** to add template ```'urlTemplate.html'```
        * **'urlTemplate.html'** is ```'<div><h3 ng-click="content()" class="btn btn-info" ng-if="isCandyVisible(title)">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>'```
    * in directive **url**
        * set restrict to E
        * transclude to true
        * isolate scope with property title on set to @
        * and templateUrl set to urlTemplate.html
        * complete function isCandyVisible (```!(!value || 0 === value.length);```) and function isContentVisible should toggle value  ```isContentVisible``` on scope





Good luck!