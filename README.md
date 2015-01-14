##Exercise 2 : Controller

The goal of this exercise is use **FruitCtrl** controller to connect data from text fields and display them.

###Before you start, please refer to:
* [angularjs-controller](https://egghead.io/lessons/angularjs-controllers)

###Exercise

1. Create a new file ***FruitCtrl.js***
2. In ***FruitCtrl.js*** 
    * create a controller ***FruitCtrl*** and inject into $scope
    * add ***fruit*** object on ***$scope*** with attributes ***seller, name, count*** 
    * initialize  attributes **seller, name, count** (example values *``` seller: John Seller, the name "Apple", count: 5 ```*)
3. Add **FruitCtrl.js** script to **index.html**
4. Set controller on ```<div class = "container">```
5. Use relevant angular directive to connect inputs with the data in the controller.
6. Update **seller, name, count**  inside **<div class =" well "** so it would display the data from the controller

###Completion

Expected result of the exercise is a simple view with three inputs binded to the previously mentioned display elements. Inputs should have a default value
and be updated in real time as the user change input.

Good luck!
