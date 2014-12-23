##Exercise 20 : angular.element
The goal of this exercise is organizing directives by collecting them into objects

###Before you start, please refer to:
* [https://egghead.io/lessons/angularjs-angular-element](https://egghead.io/lessons/angularjs-angular-element)

###Exercise
* bind new element in ```index.html``` using directive
* write watch basic on the video and this example 
```
scope.$watch("input", function (newValue) {
if ((!newValue && 0===newValue.length)|| ('square'!==newValue && 'circle' !==newValue)) {
element.removeClass("square");
element.removeClass("circle");
return;
}
if (newValue === "square") {
element.addClass("square");
element.removeClass('text-danger');
element.text('');
} 
```
append case for wheels
* other value display statement ```Not written a circle or square``` and color text to red.

Good luck!