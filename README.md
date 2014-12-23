##Exercise 26 : promise
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [https://egghead.io/lessons/angularjs-promises](https://egghead.io/lessons/angularjs-promises)
* [https://egghead.io/lessons/angularjs-resolve](https://egghead.io/lessons/angularjs-resolve)

###Exercise
* add dependency to your module
* use ```ng-view``` to routing
* config ```$routeProvider``` when path is ```/``` display  ```detailsCar.html```
* and config when path is ```#/display``` display ```display.html```
* using library ```$q``` to create ```defer``` and correct resolve with using service ```exercisePromise```
* in method ```set``` you setting ```resolve``` and in ```get``` return property ```promise```
* bind method ```success``` on scope to ```button``` and display ```result``` resolve promise
* add ```$timeout``` to waiting ```1500```
* create back button to ```detailsCar.html```

`
###Extra
* in factory create method ```unSuccess``` and ```catch``` their result in controller

Good luck!