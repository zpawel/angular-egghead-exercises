##Exercise 15 : Isolate Scope Review
The goal of this exercise is summary on isolate scope

###Before you start, please refer to:
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

###Exercise
* add to ```Box.js``` file ```box``` directive with  **E** restriction,
* add three types of isolate scope binding methods
    * ```size: "@"```
    * ```color: "="```
    * ```open: "&"```
* add to directive **template**
```
'<div class="col-md-4"><div class="panel panel-default"><div class="panel-heading">{{name}}</div>' +
                '<div class="panel-body">' +
                '<div class="form-group"> <label for="name" class="label label-default">Name</label> ' +
                '<input type="text" id="name" class="form-control"></div>' +
                '<div class="form-group"> <label for="color" class="label label-default">Color</label>' +
                '<select id="color" class="form-control"></select></div>' +
                '<label for="size" class="label label-default">Size</label>' +
                '<div class="btn btn-default" >Tell me about yourself!</div></div></div></div>',
```
 
* add **link** function
```
 link: function (scope)
        {
            scope.name = "Box";
            scope.colors = [
                {id: 1, name: "red", hex: "#FA8072"},
                {id: 2, name: "green", hex: "#98FB98"},
                {id: 3, name: "blue", hex: "#B0C4DE"}
            ];
            scope.color = scope.colors[0];
        }
```

* complete **template** with elements
    * add to input **ng-model** directive set to **name**
    * add to select **ng-model** directive set to **color** and ```ng-options="color.name for color in colors"```
    * add below **label for="size"**, ``` size``` angular-expression in **h3** tag
    * add to last div **ng-click** directive and call **open** with argument ```size: size, message: name, color: color.name}```

* in ```index.html``` add three ```box``` directives with  ```size```: **small**, **medium**, **big** (one box - one size), ```color``` set to **color** and ```open``` with  **showInside** function (remember about arguments)

Good luck!
