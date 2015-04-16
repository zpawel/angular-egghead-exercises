##Exercise 27 : resolve $routeChangeError

The purpose of the application is to process data from erroneously solved routing from promise. When in the order is filled only 'name' filed, **$routeChangeError** should react with error message. 

###Requirements
 * don't change views
 * create **error** function that use **reject** method on **productCatch**
 * add **resolve** property to appropriate routing
 * add **$routeChangeError** to **OrderCtrl**
 * put all information about product in **rejectProduct**
 * if **quantity** or **price** are empty:
    * set **class** on scope to ```alert alert-danger```
    * set **message** on scope like in **Results**
    * cost of product should be 0
 * if **quantity** and **price** are fill:
     * set **class** on scope to ```alert alert-success```
     * set **message** on scope like in **Results**
     * cost of product should be calculated 

###Results
* start view

![alt text](app/assets/1.png "1")

* **quantity** or **price** are empty

![alt text](app/assets/2.png "2")

*  **quantity** and **price** are fill

![alt text](app/assets/3.png "3")

![alt text](app/assets/4.png "4")
 
###Before you start, please refer to:
* [angularjs-resolve-conventions](https://egghead.io/lessons/angularjs-resolve-conventions)
* [angularjs-resolve-routechangeerror](https://egghead.io/lessons/angularjs-resolve-routechangeerror)

Good luck!
