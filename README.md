##Exercise 7 : Angular built in filters
The goal of this exercise is to use ready-made filter options.

###Before you start, please refer to:
* [angularjs-built-in-filters](https://egghead.io/lessons/angularjs-built-in-filters)

###Exercise

* Test **orderBy**, **limitTo** filters (according to the attribute your chosen) and **lowercase**, **uppercase** filters. 
* Use **choice** (it uses by **ng-click** directive with **orderBy** as an argument, which allows you to sort by column)
* Similarly use **limit** model as argument **limitTo** to restrict the display of the radio choice. (Hint! Add to **UserCtrl** variable **limit** set to **15**, change in ```index.html``` file **checked** to **checked** directive and set it to limit that default display).

###+Bonus task
* Add to **UserCtrl** controller  ```reverseSort``` function that will sort the data ascending and descending
* Use **reverseSort** function in **ng-click** directive

Good luck!
