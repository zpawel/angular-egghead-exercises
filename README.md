##Exercise 3 : Sharing data between controllers

The goal of this exercise is to present the data exchange between controllers.

###Before you start, please refer to:
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)
* [angularjs-sharing-data-between-controllers](https://egghead.io/lessons/angularjs-sharing-data-between-controllers)


###Exercise
1. Based on the video **angularjs-the-dot** make changes to the **index.html** file to connect (bind) each other, all three inputs.
2. Comment out the div **CENTER** in **index.html**, which will make, typing text into the **left** input will not display a **right** 
3. In **controllers.js** add a **bind** module 
``` 
var bind = angular.module('bind', []);
```
4. Create a **factory** that returns variable **direction**
```
bind.factory('Direction', function() {
    return {direction: "Direction? Left and right!"}
});
```
5. Based on the video **angularjs-sharing-data-between-controllers** edit controllers **LeftCtrl** and **RightCtrl**

Good luck!
