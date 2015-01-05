##Exercise 10 : Directive restrictions
The goal of this exercise is familiarize yourself with directive restriction.

###Before you start, please refer to:
* [angularjs-directive-restrictions](https://egghead.io/lessons/angularjs-directive-restrictions)

###Hint
The restrict option is typically set to
 * 'A' - attribute
 * 'E' - element
 * 'C' - class
 * 'M' - comment

These restrictions can all be combined as needed
* 'AEC' - matches either attribute or element or class name


###Exercise
* inside div with ```restrictECtrl``` controller use ```restrict-e``` directive
* based on ```restrictE``` directive in ```Restrict.js``` file, create ```restrictA```, ```restrictC``` directives, then use them inside div with corresponding controller name
* create ```restrictM``` directive with ```link``` attribute like below:
```     
link: function ()
        {
            alert("Restrict M: <!-- directive: restrictM -->")
        }
```

* use ```restrictM``` directive inside ```<div class="row"></div>```

Good luck!
