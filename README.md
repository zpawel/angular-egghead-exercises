##Exercise 16 : Transclusion basics
The goal of this exercise is familiarize yourself with ng-tranclusion directive

###Before you start, please refer to:
* [angularjs-transclusion-basics](https://egghead.io/lessons/angularjs-transclusion-basics)

###Exercise
* add to ```Animal.js``` file ```animal``` directive with return properties:
    * restriction **E**, 
    * scope with **name** set to '@'
    * and template ```'<h3>{{name}}</h3>' + '<div> I am not a button :( </div>'```
    
* add to ```index.html``` three ```animal``` directives with a **name** attribute set consecutively on **Dog**, **Cat** and **Pig**"
* inside each directive add button ```<div class="btn btn-default" >Hau!</div>``` (change button descripion to "Miau!" and "Quiq" for Cat and Pig :) ) 
* check the effect of ```index.html``` view
* add to ```animal``` directive **transclude** property set to **true**
* add ```ng-transclude``` to a div in directive template and check the effect

Good luck!
