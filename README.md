##Exercise 11 : Understanding isolate scope
The goal of this exercise is create directive which has its own scope.

###Before you start, please refer to:
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)
* [angularjs-isolate-scope-expression-binding](https://egghead.io/lessons/angularjs-isolate-scope-expression-binding)


###Exercise
* add to ```Shop.js``` file ```shoppingTime``` directive.
* add to **return** 
 * ```restrict``` with **E** value
 * ```template : '<div class="panel panel-success text-center">' +
                '<p class="panel-heading"><strong>I want to buy:</strong></p>' +
                '<div class="panel-body"><input type="text" class="form-control form-group">' +
                ' <div class="btn btn-success">Buy!</div></div></div>'```
  * ```scope``` with ```{buy: "&" }```

* add to **input** in ```template``` attribute, **ng-model** directive  set to **product**
* add to **div** (```<div class="btn btn-success">```) in ```template``` , **ng-click** directive set to```buy``` function 
* as an argument of ```buy``` function use object with ```newProduct``` property set to variable use in **ng-model** directive
* add to **ShopCtrl** ```$scope.shopping``` function:
```
 $scope.shopping = function (product)
    {
        if (product == undefined || product == '') {
            alert("Not entered product");
        } else {
            $scope.products.push({name: product});
            alert("You just buy: '" + product + "' !");
        }
    }
 ```
* in index.html file add previously created directive at indicated line(comment); moreover, specify **buy** attribute there and pass the **shopping** function to it so it would be used by directive(**Hint**: you also need to specify parameter)

* copy all ```<div class="col-md-6" ng-controller="ShopCtrl">...</div>``` 
below and verify that the components are independent of each other.

Good luck!
