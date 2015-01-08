##Exercise 32b: Components and container
The goal of this exercise is dismantle different components and container

###Before you start, please refer to:
* [angularjs-components-and-containers](https://egghead.io/lessons/angularjs-components-and-containers)

###Exercise
1. Routing:
    * add dependency ```ngRoute``` to your module
    * use ```ng-view``` to routing
    * when path is ```/``` display templateUrl ```choose.html``` with controller ```chooseCtrl```
    * when path is ```/container``` display templateUrl ```choose.html``` with controller ```chooseCtrl```
    * when path is ```/components``` display templateUrl ```choose.html``` with controller ```chooseCtrl```

2. Components:
    * complete directive ```myComponents``` in ```componentsOrContainer.js```
    * complete directive ```myContainer``` in ```componentsOrContainer.js```
    * to both add isolated ```scope``` with correct property
    * to first ```div``` in template in directive ```myComponents``` add class ```my-components``` from css
    * to first ```div``` in template in directive ```myContainer``` add class ```my-container``` from css
    * to ```myComponents``` add template ```'<div class="text-danger my-components"><div>{{name}}</div></div>'```
    * set ```name``` to ```"This directive is simple components {{repeat}}"```
    * use ```ng-repeat``` to add ```myComponents```
    * in directive ```myContainer``` based movie and template ```myComponents``` display ```title``` with class ```alert-info```, the title set to ```"I have many components"```
    * use ```ng-repeat``` to add ```myComponents``` to container

Good luck!