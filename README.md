##Exercise 12 : Isolate Scope "@", "="
The goal of this exercise is create directive which has its own scope (attribute and two-way binding).

###Before you start, please refer to:
* [angularjs-isolate-scope-attribute-binding](https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding)
* [angularjs-isolate-scope-two-way-binding](https://egghead.io/lessons/angularjs-isolate-scope-two-way-binding)

###Exercise
* Add to ```Proverb.js``` file ```proverbOne``` directive with:
 * restrict **A**
 * scope with ```sentence: '@'```
 * template **div** with **sentence** angular expression
* In ```index.html``` add to **h3** tag ```proverb-one``` directive with **sentence** set to **sentenceCtrl**
```sentence={{sentenceCtrl}}``` and check the effect.

* Add to ```Proverb.js``` file ```proverbTwo``` directive with:
 * restrict **E**
 * scope with ```eyefor: '='```
 * template 
``` 
'<div class="col-md-3 row"><input type="text" class="form-control"></div>' +
 '<h3>An <strong>{{eyefor}}</strong> for an <strong>{{eyefor}}</strong> and a tooth for a tooth.</h3>'
```

* Add to template's input **ng-model** directive with **eyefor** value
* In ```index.html``` add ```proverb-two``` directive (remember that, you set restrict to **E**) with **eyefor** set to **eyeForCtrl**
```eyefor="eyeForCtrl"``` and check the effect.

Good luck!
