#Exercise 27 : resolve $routeChangeError

##Summary
The purpose of the application is to process data from erroneously solved routing from promise. When in the order is filled only 'name' filed, `$routeChangeError` should react with error message. 

##Goals
 * views are ready (don't change them)
 * create `error` function with `reject` method use `productCatch`
 * add `resolve` property to appropriate routing
 * put all information about product in `rejectProduct` object
 * if `quantity` or `price` field is empty - display `message` : **You give wrong data** inside red alert 
     (`alert alert-danger` bootstrap class) and set cost of product to 0
 * if `quantity` and `price` are fill display `message` : **You give correct data** inside green alert 
     (`alert alert-success` bootstrap class) and calculate cost of products (price * quantity)
                                               
 
##Before you start, please refer to:
* [angularjs-resolve-conventions](https://egghead.io/lessons/angularjs-resolve-conventions)
* [angularjs-resolve-routechangeerror](https://egghead.io/lessons/angularjs-resolve-routechangeerror)


##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
