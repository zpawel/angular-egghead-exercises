##Exercise 24 : $routeProvider
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-ng-view](https://egghead.io/lessons/angularjs-ng-view)
* and again install bower ```bower install```

###Exercise
* add dependency ```ngRoute``` to your module
* with using directive ```ng-view``` change ```templateUrl``` to ```correct.html``` and ```controller``` to ```appCtrl```
* add a button in ```correct.html``` to display ```message``` from controller

Good luck!


##Exercise 24 : $routeProvider
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-ng-view](https://egghead.io/lessons/angularjs-ng-view)
* Use bower to download new component, type ```bower install``` in console
* This exercise includes basic event handling to ensure correct application behavior. For now, just ignore it

###Exercise
* In index.html:
    * Below angular.js add angular-route.js script(bower_components/angular-route)
    * Add ng-view element(check comment to place it correctly)

* In sample.js:
    * Add ```ngRoute``` dependency to your module
    * Configure **$routeProvider**:
        * When you specify ```'/'``` route, You should be redirected to ```correct.html``` and use ```appCtrl```
        ( *Hint:* templateUrl and controller fields)
        * **otherwise** you should be automatically redirected to ```'/'```
    * In appCtrl specify **display** function as follows:
      ```function ()
         {
           this.message = this.message ? '' : 'I came from a controller';
         };```
* In **correct.html:**
    * create two ```<button class="btn btn-default center-block"></button>``` in specified place(comment)
    * first button should be labeled as ```Click to show!``` and be shown only if message in appCtrl is empty
    * second button should be labeled as ```Click to hide!``` and be shown only if message in appCtrl contain a non empty string
    * use **display** function to display message from appCtrl(specify ng-click on both buttons)

Correct application behavior is to display ```This is correct html``` and other correct.html elements according to the task.
You shouldn't be able to see ```This is NOT correct html.``` !

Good luck!
