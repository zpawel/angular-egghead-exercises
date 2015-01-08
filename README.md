##Exercise 15 : Isolate Scope Review
The goal of this exercise is summary on isolate scope

###Before you start, please refer to:
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

###Exercise
* add to ```box``` directive **E** restriction,
* add three types of isolate scope binding methods
    * ```size: "@"```
    * ```color: "="```
    * ```open: "&"```
* complete **template** with elements
        * add to input **ng-model** directive set to **name**
        * add to select **ng-model** directive set to **color** and ```ng-options="color.name for color in colors"```
        * below **for="size"** label add an **h3 tag** with an angular-expression containing size variable
        * add to last div **ng-click** directive and call **open** with ```size: size, message: name, color: color.name``` object as an argument 
* add **link** function
```
        link: function (scope) {
            scope.name = "Box";
            scope.colors = ["red", "green", "blue"];
            scope.color = scope.colors[0];
        }
```
* in ```index.html``` add three ```box``` directives with  ```size```: **small**, **medium**, **big** (one box - one size), ```color``` set to **color** and ```open``` with  **showInside** function (remember about arguments)

Good luck!
