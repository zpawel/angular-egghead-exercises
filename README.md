##Exercise 14 : Directive to Directive Communication
The goal of this exercise is show how to share information between directives

###Before you start, please refer to:
* [angularjs-directive-to-directive-communication](https://egghead.io/lessons/angularjs-directive-to-directive-communication)

###Exercise
* add to ```Alarm.js``` file ```alarm``` directive, which return 
    * restrict A,
    * controller function, with tree functions: ```addRed```, ```addYellow```, ```addGreen```. Inside each of the functions place alert with proper color, like ```alert("<color> alarm!")```"
    
* below, create ``red`` directive, which **require** ```alarm``` directive,
* add **link** function, which bind **click** event with ```red``` directive

```
link: function (scope, element, attrs, alarmCtrl)
        {
            element.bind("click", function ()
            {
                alarmCtrl.addRed();
            })
        }
```
* add ```red``` directive to the first indicated div(check comments in index.html and remember that it **requires** alarm directive)"
* based on ```red``` directive, create ```yellow``` and ```green``` directives (with **dblclick** and **mouseenter** event) and use them in the next divs
    

Good luck!
