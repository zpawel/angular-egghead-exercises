##Exercise 11 : Understanding isolate scope
The goal of this exercise is create directive which has its own scope.

###Before you start, please refer to:
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)
* [angularjs-isolate-scope-expression-binding](https://egghead.io/lessons/angularjs-isolate-scope-expression-binding)


###Exercise
* Add to ```Shop.js``` file ```shoppingTime``` directive.
* Add to **return** 
 * ```restrict``` with **E** value
 * ```template : '<div class="panel panel-success text-center">' +
                '<p class="panel-heading"><strong>I want to buy:</strong></p>' +
                '<div class="panel-body"><input type="text" class="form-control form-group">' +
                ' <div class="btn btn-success">Buy!</div></div></div>'```
  * ```scope``` with ```{buy: "&" }```

* Add to **input** in ```template``` attribute, **ng-model** directive  ```ng-model="product"```
* Add to **div** with button properties, **ng-click** directive ```ng-click="buy({newProduct:product})"```using the value of **ng-model** directive (product)
* Add to **ShopCtrl** ```$scope.shopping``` function:
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
* In ```index.html``` file insert the appropriate form of the directive with **buy** attribute calling **shoping** function
```
buy="shopping(newProduct)"
```

* Copy all ```<div class="col-md-6" ng-controller="ShopCtrl">...</div>``` 
below and verify that the components are independent of each other.

Good luck!
