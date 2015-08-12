##Exercise 35b: Directive Communication

##Summary
Sometimes directive have to use data from another directives and controllers, in this application must build chain directives
which display template when previous directive is set to.

##Goals
   
  * after you select country, you should be able to select state
  * when country and state are selected you should see table with state details
  * **home.html** is default page
  * don't change any of views
  * take a look at method:
    * **getListState** - returns list from listState which you choose
    * **getDetails** - returns details state which You choose (country and state)   
  * after you choose country - you should be able to choodcomplete directives to achieve the effect as in **Results** section
 
 
##Before you start, please refer to:
* [angularjs-directive-communication](https://egghead.io/lessons/angularjs-directive-communication)


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
 
Good luck!
