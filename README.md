##Exercise 19 :  Building Zippy
The goal of this exercise is use ng-model, ng-click and transclusion without controller

###Before you start, please refer to:
* [angularjs-building-zippy](https://egghead.io/lessons/angularjs-building-zippy)

###Exercise
* add to ```Money.js``` file ```money``` directive with:
    * restrict **E**
    * scope with **forWhat** set to **@**, and **howMany** set to "=" properties
    * transclude set to true,
    * template
```
'<label for="devote" class="label label-default">How much to devote</label>' +
                 '<select id="devote" ng-options="proposal for proposal in proposals" class="form-control"></select>' +
                 '<div class="text-center"> <h3 class="btn btn-default">{{forWhat || "For poor pets"}}</h3>'
                 + '<div ng-show="isContentVisible"><div ></div><strong>{{takeMyMoney}}</strong></div><div>
 ```
    
* link function with :
    * **proposals** array with content ```10, 20, 30, 40, 50, 60```
    * **howMany** set to the first element of **proposals** array
    * **toggleContent** function and **isContentVisible** variable
        
```
                    scope.isContentVisible = false;        
                    scope.toggleContent = function ()
                    {
                        scope.isContentVisible = !scope.isContentVisible;
                        scope.takeMyMoney = "Shut up and take my money!"
                    }
```
            
* complete the template with:
      * **ng-model** directive set to **howMany** in select
      * **h3** tag (with button characteristics) with **ng-click** directive set to **toggleContent** function
      * **ng-transclude** directive to the div **INSIDE** div with ```ng-show="isContentVisible"``` to attach **takeMyMoney** message
                
* in index.html add: 
    * **ng-model** to the first input(with #name id) set to name 
    * **ng-model** to the second input(with #forWhat id) set to forWhat 
    * **h3** tag in correct place(check comment) as follows: ```<h3>I'm {{name}}</h3>```

* see how it works!

Good luck!
