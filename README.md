#Exercise 20 : angular.element

##Summary
Write a directive which, depending on the entered values will change the class specified in directive input.

##Goals
 
 * directive should be restricted as element.
 * use **h4** header tag as an angular element
 * the directive should react to any change in **input**.
    * when the **input** value is set to: *circle* or *square*, element class should be changed respectively on a `circle` or `square`.
    * in other cases, it should display a red message *`You did not enter *circle* or *square*`* (using **text-danger** class).
 
To add class to element use **addClass('className')** function, to remove class use **removeClass('className')** and to add text use **text(''someText')**.

###Before you start, please refer to:
* [angularjs-angular-element](https://egghead.io/lessons/angularjs-angular-element)
* [angularjs-the-basics-of-scope-watch](https://egghead.io/lessons/angularjs-the-basics-of-scope-watch)


##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
