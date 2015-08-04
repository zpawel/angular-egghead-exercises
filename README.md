#Exercise 31 : Injectors

##Summary
In this simple application the customer selects the required part of his car and decides whether to wait for parts or check their availability.
Implement `checkNow()` and `wait()` function using **$injector** 

##Goals
  * if the client decides to wait ( `I can wait 3 seconds` ) use a function that turns all the products available
  * when button `I can't wait, check it now!` was clicked, it should use a function that returns the 'availability' chosen car part
  * display `This part is available and is very cheap` message if part is available .
  * when part is NOT available you should display  `This part is NOT available and is very expensive...` message

##Before you start, please refer to:
  * [angularjs-injectors](https://egghead.io/lessons/angularjs-injectors)
  
##Setup
 You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. To resolve dependencies run:
 
 ```
 npm install
 ```
 
 ```
 bower install
 ```
 
To run the application:
 
 ```
 grunt serve
 ```
 
To run cucumber tests:

 ```
 grunt test
 ```
 
To run unit tests:

 ```
 grunt karma
 ```
 
Good luck!
