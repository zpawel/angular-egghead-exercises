#Exercise 17: An alternative approach to controllers

##Summary
An alternative approach to controllers assumes that function should be assigned to controller, not to the $scope. You task is to implement functionality according
to the regulations below.

##Goals

* `Calc.js` should contain `SumCtrl` and `SubCtrl` controllers
* `SumCtrl` should has `add` function assigned to itself, which requires two params and assigns the result to `sum` variable
* similarly `SubCtrl` but should assigns the result to `sub` variable
* each controller should have two variables (`firstNumber`, `secondNumber`) initialized values **12** and **1**
* use `add`  and `subtraction` function and display the result in correct header (check comments)


##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start unit test, run

```
grunt karma
```

##Before you start, please refer to:
* [angularjs-an-alternative-approach-to-controllers](https://egghead.io/lessons/angularjs-an-alternative-approach-to-controllers)


Good luck!
