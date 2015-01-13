##Exercise 23 : templateCache
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-templateCache](https://egghead.io/lessons/angularjs-templatecache)
* [angularjs-ng-if](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise
1. in **index.html**
     * add **url** directive with ```title``` on set to **title** input and ```quantity``` set to **quantity** input(number)


2. in templateUrl.js
    * in **candyTemplateUrl.run**
        * use **$templateCache.put** to add template ```'urlTemplate.html'```
        * **'urlTemplate.html'** is ```'<div><h3 ng-click="content()" class="btn btn-info" ng-if="isCandyVisible(title)">{{title}}</h3><div ng-show="isContentVisible"></div></div>'```
        * modify template to achieve following results:
             * when quantity is greater than 100 you should display message ```You\'ve ordered a lot of {{title}}s!``` in tags **<span>**
                * and the title is ```candy``` you should display image **Candy.jpg**
             * when quantity is less than 100 and more than 1 you should display ```Your order: {{quantity}} {{title}}s```
             * when quantity is equal 1 you should display ```Your order: {{quantity}} {{title}}```
    * in directive **url**
        * set restrict to **E**
        * isolate **scope** with property **title** and **quantity** set to ```'@'```
        * set **templateUrl** to ```urlTemplate.html```
        * complete function **isCandyVisible** return (```!(!value || 0 === value.length);```)
        * function **isContentVisible** should toggle value  ```isContentVisible``` on directive scope





Good luck!
