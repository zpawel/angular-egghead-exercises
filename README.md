##Exercise 11 : Understanding Isolate Scope
The goal of this exercise is create directive which has its own scope.

###Before you start, please refer to:
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)

###Exercise
* add to ```Shop.js``` file ```shoppingTime``` directive.
* add to **return** 
 * ```restrict``` with **E** value
 * ```template : '<div class="panel panel-success text-center">' +
                '<p class="panel-heading"><strong>I want to buy:</strong></p>' +
                '<div class="panel-body"><input type="text" class="form-control form-group">' +
                ' <div class="btn btn-success">Buy!</div></div></div>'```
  * ```scope``` with ```{buy: "&" }```

* add to **input** in ```template``` attribute, **ng-model** directive  ```ng-model="product"```
* add to **div** with button properties, **ng-click** directive ```ng-click="buy({newProduct:product})"```using the value of **ng-model** directive (product)
* add to **ShopCtrl** ```$scope.shopping``` function:
```
 $scope.shopping = function (product)
    {
        console.log(product);
        if (product === undefined || product == '') {
            alert("Not entered product");
        } else {
            $scope.products.push({name: product});
            alert("You just buy: '" + product + "' !");
        }
    }
 ```
* in ```index.html``` file insert the appropriate form of the directive with **buy** attribute calling **shoping** function
```
buy="shopping(newProduct)"
```

* copy all ```<div class="col-md-6" ng-controller="ShopCtrl">...</div>``` 
below and verify that the components are independent of each other.

Good luck!
