#Exercise 13 : Directives talking to controllers

##Summary
In this exercise, your challenge is to share information between the controller and the directive. 
Implement functionality that will allow to add (when the mouse hovers over the green square) and remove (when the mouse hovers over the green square) snowflake.

##Goals
* **snow.js** file should contain ***enter*** directive which talks to controller ***SnowCtrl***
* create ***addPetal*** and ***removePetal*** functions to add and remove snowflake form ***snow*** array
* snowflake is an object `{petal: '*'}`
* this is your snow pattern petal `id="petal" <span class="glyphicon glyphicon-star"></span>`
* enjoy the stellar snow :)

###Before you start, please refer to:
* [angularjs-directives-talking-to-controllers](https://egghead.io/lessons/angularjs-directives-talking-to-controllers)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
