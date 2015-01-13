##Exercise 31 : Injectors
The goal of this exercise is dismantle factory to provider

###Before you start, please refer to:
* [angularjs-injectors](https://egghead.io/lessons/angularjs-injectors)

###Exercise
1. Routing:
    * add dependency ```ngRoute``` to your module
    * use ```ng-view``` to routing
    * when path is ```/``` display templateUrl ```carParts.html```
    * when path is ```/choose``` display templateUrl ```choosePart.html``` and add controller ```chooseCtrl```

2. Write in carService.config provider:
    * based on the method ```setToTrue```, write a method that will set alternately change the status of a selected part of the access
    * write method ```$get```
    * and append ```set``` method ```set```
    * and append ```setToTrue``` method ```setToTrue```
    * and append ```lists``` variable ```lists```

3. In ```chooseCtrl```
    * write method ```checkNow``` based method wait and set ```timeout``` to ```10```
    * write correct condition when ```$scope.data``` and ```$scope.data.part``` is NOT defined and suitable method return true should display ```resultInvoke``` ```"This part is NOT available is very expensive..."```
    * otherwise display ```resultInvoke 'This part is available and is very cheap"```

4. In ```carPartsCtrl```
    * set ```data.list``` to ```name``` selected radio button

Good luck!