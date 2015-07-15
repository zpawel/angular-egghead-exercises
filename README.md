#Exercise 23 : templateCache

##Summary
In the application, the same data can be displayed in several different method, depending on the given method is changed template in directive. 

You start with three ready template: 
   * button - should be use when **button** is entered into template input 
   * table - should be use when **table** is entered into template input 
   * default - should be use when template is empty or when is entered text other than template above 

##Goals
 * add **template** to cache templates and use them into link function.
 * DON'T change **return** in directive.

###Results
* `default template` should display template: order x quantity (e.g. pizza x 12)
* `button template` should display button - an after clicking - message:  Your order: quantity order (e.g. Your order: 12 pizzas)
* `table template` should display table with data, e.g.

| order  | quantity |
|--------|----------|
| pizza  | 12       | 
  

###Before you start, please refer to:
* [angular templateCache](https://egghead.io/lessons/angularjs-templatecache)
* [$compile](https://code.angularjs.org/1.2.16/docs/api/ng/service/$compile)
* [$watch](https://egghead.io/lessons/angularjs-the-basics-of-scope-watch)

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
