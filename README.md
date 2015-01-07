##Exercise 20 : angular.element
The goal of this exercise is organizing directives by collecting them into objects

###Before you start, please refer to:
* [angularjs-angular-element](https://egghead.io/lessons/angularjs-angular-element)

###Exercise
* bind ```find-element```  in ```index.html``` using directive
* add to directive ```template``` class ```form-control``` type ```text``` and ng-model ```input```

* write in function ```link``` watch basic on the video and this example
```        scope.$watch("input", function (newValue)
           {
               if ((!newValue || 0 === newValue.length) || ('square' !== newValue && 'circle' !== newValue)) {
                   //    add display 'Not written.....'
               } else if (newValue === "square") {
                   element.addClass("square");
                   element.removeClass('text-danger');
                   element.text('');
               }
           })```
* append case for wheels
* other value display statement ```Not written a circle or square``` and color text to red.

Good luck!