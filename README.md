#Exercise 26 : Promises

##Summary
The application allows you to add products and their amounts to the order. You see them only if you "resolve the order" - clicking the 'Resolve' button 
under the table.

##Goals
  * don't change `index.html` view 
  * `getItem` function should return the name of the specified index
  * `getQuantity` function should return the quantity of the specified index
  * `success` function should resolve promises from method `getItem` and `getQuantity`
  * use `index` variable in `success` function

##Before you start, please refer to:
* [angularjs-promises](https://egghead.io/lessons/angularjs-promises)
* [angularjs-resolve](https://egghead.io/lessons/angularjs-resolve)

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
