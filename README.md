##Exercise 10 : Directive restrictions
The goal of this exercise is familiarize yourself with directive restriction.

###Before you start, please refer to:
* [angularjs-directive-restrictions](https://egghead.io/lessons/angularjs-directive-restrictions)

###Hint
The restrict option is typically set to:
'A' - attribute
'E' - element
'C' - class
'M' - comment

These restrictions can all be combined as needed:
'AEC' - matches either attribute or element or class name


###Exercise
1. Inside div with ```restrictECtrl``` controller use ```restrict-e``` directive
2. Based on ```restrictE``` directive in ```RestrictCtrl``` file, create ```restrictA```, ```restrictC``` directives, then call them in div with their controllers.
3. Create ```restrictM``` directive with ```link``` attribute like below:
```
     link: function ()
        {
            alert("Restrict M: <!-- directive: restrictM -->")
        }
```

4. Verify that each directive was called.
Good luck!
