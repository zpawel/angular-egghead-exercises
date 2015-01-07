##Exercise 13 : Directives talking to controllers
The goal of this exercise is show how to share information between controllers and directives

###Before you start, please refer to:
* [angularjs-directives-talking-to-controllers](https://egghead.io/lessons/angularjs-directives-talking-to-controllers)

###Exercise
* add to ```Snow``` file ```enter``` directive, like in video (in the link above), which binds jQuery event with directive

```
element.bind("mouseenter", function ()
        {
            scope.$apply(attrs.enter)
        })
 ```
 
* add to **$scope** in ```SnowCtrl``` :
 * ```snow``` array
 * ```addPetal``` function, which push 'petal' to the **snow** array ``` $scope.snow.push({petal: '*'})```
 * ```removePetal``` function, which pop 'petal' from the **snow** array (if snow array length is different than 0)

* add to green square **enter** directive with ```addPetal()``` function
* add to red square **enter** directive with ```removePetal()``` function
* enjoy with star snow :)

Good luck!
