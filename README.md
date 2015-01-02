##Exercise 2 : Controller

The goal of this exercise is use **FruitCtrl** controller to connect data from text fields and display them.

###Before you start, please refer to:
* [angularjs-controller](https://egghead.io/lessons/angularjs-controllers)

###Exercise

* Create a new file **FruitCtrl.js**
* Inside **FruitCtrl.js** create a controller **FruitCtrl** accepting ```$scope```  argument, like this: ```function FruitCtrl($scope){}```
* Inside controller, place **fruit** object on **$scope** with attribute **seller, name, count** - then initialize them (example values ``` seller: John Seller, the name "Apple", count: 5 ```)
* In **index.html** file add ```<script src="FruitCtrl.js"></script>```
* Add  controller to ```<div class = "container">``` 
* Use ```ng-model``` directive to connect inputs with data in the controller.
* Update ***seller, name, count***  inside **<div class =" well "** so that displayed the data from the controller

Good luck!
