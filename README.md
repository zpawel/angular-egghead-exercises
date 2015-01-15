##Exercise 9 : Directives 

Application require you to change element behavior based on specific event. You are supposed to write four directives that bind events to two provided canvas. 


When you move your mouse over the provided circle(check comments) bootstrap class should be added, on the other hand when you leave the area it should be 
removed back. Secondly, when you double click square it should add provided class to the square and when you single click - it should be removed. Please be aware
that you should be able to pass specified bootstrap class as argument to the directive.

###Requirements
* ***enter*** directive that return a **function** (check videos) inside and binds **mouseenter** event
* **enter** directive should add class provided as attribute in **index.html** when **mouseenter** is fired


* ***leave*** directive that return a **function** inside and binds **mouseleave** event
* **leave** directive should remove class provided as attribute in **index.html** when **mouseleave** is fired


* ***dblClick*** directive that return a **function** inside and binds **dblclick** event
* **dblClick** directive should add class provided as attribute in **index.html** when **dblclick** is fired


* ***click*** directive that return a **function** inside and binds **click** event
* **click** directive should remove class provided as attribute in **index.html** when **click** is fired


* **index.html** should be completed to achieve correct behavior for circle and square mentioned before(also check comments)
* ***bg-danger*** passed as an attribute to enter and leave directive
* ***bg-info*** passed as an attribute to dblClick and click directive

###Before you start, please refer to:
* [angularjs-basic-behaviors](https://egghead.io/lessons/angularjs-basic-behaviors)
* [angularjs-useful-behaviors](https://egghead.io/lessons/angularjs-useful-behaviors)
* [jquery/bind](http://api.jquery.com/bind/)


Good luck!
