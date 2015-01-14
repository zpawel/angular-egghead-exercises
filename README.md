##Exercise 32 : Components And Containers
The goal of this exercise is use directive as a component and container.

###Before you start, please refer to:
* [angularjs-components-and-containers](https://egghead.io/lessons/angularjs-components-and-containers)

###Exercise
* inside ```book.js``` file complete ```bookTitle``` directive with:
    * ```E``` **restrict**
    * ```title``` in **scope** set to ```@```
    * angular expression in **template** ```strong``` tag
    
* create ```bookDescription``` directive with
    * ```E``` **restrict**
    * ```text``` in **scope** set to ```=```
    *  template ```<div class="jumbotron text-left">{{text}}</div>```
    
* add to ```book``` directive 
    * ```publisher``` in **scope** set to ```@```
    * angular expression in **template** ```strong``` tag
    * ```transclude``` property set to true
    * **ng-transclude** directive  in correct place(check comment)
      
* in ```index.html``` file construct a container with a  ```book``` directive
    * set ```publisher``` to **Doubleday (US)**
    * add ```bookTitle``` directive with ```title``` set to **The Da Vinci Code**
    * add ```bookDescription``` directive with ```text``` set to ```description``` inside ```BookCtrl```
    * add ```bookPages``` directive with ```number``` set to **454**

Good luck!
