##Exercise 35b: Directive Communication
The goal of this exercise is practise communication directive

###Before you start, please refer to:
* [angularjs-directive-communication](https://egghead.io/lessons/angularjs-directive-communication)

###Exercise

1. Write routing
    * when path is ```/``` display ```zero.html``` with ```app``` controller
    * when path is ```/first``` display ```first.html```
    * when path is ```/second ``` display ```second.html```

2. Complete directive:
    * in ```firstDirective``` set restrict ```E``` and controller ```firstCtrl```
    * in ```secondDirective``` set restrict ```E``` and controller ```secondCtrl```
    * in ```thirdDirective```:
        * set restrict ```E```
        * should ```require``` directive ```firstDirective``` and ```secondDirective```
        * in div with class ```text-muted```
            * display ```firstMessage``` and ```secondMessage``` from controllers
            * display ```thirdMessage``` from ```attribute``` thirdDirective set ```thirdMessage``` to ```When you write other value default page.```
        * add ```input``` after label and set ```ng-model``` to ```value```
        * in ```link``` function set correct properties on ```scope``` and ```changeValue``` function on scope.
    * if you done everything correctly you should see rest of the instruction


Good luck!