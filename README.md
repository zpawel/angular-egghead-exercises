##Exercise 33b: ng-repeat and $index, $event, $log
The goal of this exercise is practise directive ng-repeat

###Before you start, please refer to:
* [angularjs-index-event-log](https://egghead.io/lessons/angularjs-index-event-log)

###Exercise

1. In index.html add controller
2. In checkLog.html add:
    * add directive ```ng-repeat``` to write all element in list use ```track by $index```
    * use ```ng-class``` to add class from function ```addClass``` in controller
3. In log.js add
    * complete method addClass
        * when value is ```5``` or ```10``` add class ```btn btn-danger```
        * other value add class ```btn btn-info```
    *complete method display
        * set value ```pageX``` on scope to ```pageX``` from event
        * set value ```pageY``` on scope to ```pageY``` from event
        * when ```id``` element is ```5``` or ```10``` redirect user to ```displayLog.html``` use ```location.path('/checkLog');```
        * use $log to display ```$log``` in console.

Good luck!