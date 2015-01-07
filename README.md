##Exercise 27 : resolve vs $routeChangeError
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-resolve-conventions](https://egghead.io/lessons/angularjs-resolve-conventions)
* [angularjs-resolve-routechangeerror](https://egghead.io/lessons/angularjs-resolve-routechangeerror)

###Exercise
* add dependency ```ngRoute``` to your module
* use ```ng-view``` to routing
* config ```$routeProvider``` when path is ```/``` display  ```propertyProduct.html``` with controller```catchErrorCtrl```
* config ```$routeProvider``` when path is ```/order``` display  ```propertyOrder.html```
* config ```$routeProvider``` when path is ```/property``` display  ```propertyOrder.html```
* add ```appCtrl``` in ```index.html```
* in function```error``` create ```defer``` and use method ```reject``` to return ```productCatch```
* use ```$timeout``` to waiting 2 second
* in ```appCtrl``` write ```$watch``` to which will look at ```product```
* save all change to ```productCatch``` use this in ```reject```
* in ```catchErrorCtrl``` use ```rootScope.$on``` to catch error and data from reject
* use service ```$location``` to redirect to ```/property```
* set data to display when ```price``` or ```quantity``` is less 0 or is NOT defined you should set ```cost``` 0 and add class ```alert alert-danger``` to ```message```
* when all is correct display message ```'You give wrong data'``` when is NOT display message ```'You give correct data'```
* when is all is correct you display cost [price*quantity] (remember quantity can NOT fraction) and add class ```alert alert-success``` to message



Good luck!