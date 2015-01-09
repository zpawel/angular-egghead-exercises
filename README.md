##Exercise 29 : Providers
The goal of this exercise is dismantle factory to provider

###Before you start, please refer to:
* [angularjs-providers](https://egghead.io/lessons/angularjs-providers)

###Exercise
Your job is to replace the **home** factory with the **home** provider:'
* remove **home** factory 
* add to ```home.js``` file **home** provider
* add to provider to variables: ```color``` and ```number```
* add to provider ```setColor``` function, which set the **color**
* add to provider ```randomNumber``` function, which randomizes a house number. (**Hint** : ```Math.floor((Math.random() * 100) + 1);```)
* add to provider's **return** ```$get``` function which return object (properties **color** and **number** set to appropriate variables)
* add ```homeApp.config``` which use ```homeProvider```  
* in ```homeApp.config``` use function ```setColor``` and ```randomNumber```
* remove 

Good luck!
