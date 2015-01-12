##Exercise 20 : angular.element
The goal of this exercise is organizing directives by collecting them into objects

###Before you start, please refer to:
* [https://egghead.io/lessons/angularjs-angular-element](https://egghead.io/lessons/angularjs-angular-element)

###Exercise
* in **element.js** complete directive  ```findElement```
* write watch in function **link** basic on the video and this example
```        scope.$watch("input", function (newValue)
           {
               if ((!newValue || 0 === newValue.length) || ('square' !== newValue && 'circle' !== newValue)) {
                   element.removeClass("square");
                   element.removeClass("circle");
                   element.text('Not written a circle or square');
                   element.addClass('text-danger');
               } else if (newValue === "square") {
                   element.addClass("square");
                   element.removeClass('text-danger');
                   element.text('');
               } else if (newValue === 'circle') {
                   element.addClass("circle");
                   element.removeClass('text-danger');
                   element.text('');
               }
           })```
* append case for wheels
* and set template to ```'<div> <input class="form-control" type="text" ng-model="input"><div>'```
* bind new element in ```index.html``` using directive
* other value display statement ```Not written a circle or square``` and color text to red.

Good luck!