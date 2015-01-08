##Exercise 17 : An alternative approach to controllers
The goal of this exercise is familiarize yourself with alternative approach to controllers

###Before you start, please refer to:
* [angularjs-an-alternative-approach-to-controllers](https://egghead.io/lessons/angularjs-an-alternative-approach-to-controllers)

###Exercise
* add to "Calc.js" file ```SumCtrl``` and ```SubCtrl``` controllers
* inside **SumCtrl** add  simple **addition** function which adds two numbers and analogously add to ```SubCtrl``` **subtraction** function
* add to **SumCtrl** on $scope two variables : ```firstNumberSum``` and ```secondNumberSum```, then analogously add to ```SubCtrl``` variables : ```firstNumberSub``` and ```secondNumberSub```. Initialize them exemplary values. 
* inside ```addition``` and ```subtraction``` function add alert with operation and solution equation
* inside each controllers add return **$scope.ctrlName** set to **this**;
* add to divs below appropriate comments ```SumCtrl``` and ```SubCtrl```
* add to buttons appropriate function with **ng-click** directive and giv him two number as an argument
* add to **h3** angular expression with result (remember about controller!)

Good luck!
