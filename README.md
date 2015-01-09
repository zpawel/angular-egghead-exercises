##Exercise 36b: ng-repeat-start
The goal of this exercise is practise ng-repeat-start

###Before you start, please refer to:
* [angularjs-ng-repeat-start](https://egghead.io/lessons/angularjs-ng-repeat-start)

###Exercise

1. Write routing
    * when path is ```/``` display ```start.html``` with ```app``` controller
2. index.html
    * add **appCtrl as app**
    * use **ng-view** to routing
3. in start.js
    * write routing
        * when path is ```/``` display ```start.html``` with ```app``` controller
    * in simpleFactory
        * complete method get you should return object with property ```list``` and value ```listUser```
    * in ```viewCtrl``` controller
        * append``` listUsers``` from factory to ```user``` on controller
        * and you should ```toggle``` enable element in the ```users.list```

4. in start.html
    * you can NOT change structure table!
    * in first **div** add controller **viewCtrl as view**
    * complete definition table
        * use **ng-click** on the row table to toggle view country in next row
        * use **ng-if** to display country



Good luck!