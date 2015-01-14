##Exercise 29 : Route Life Cycle
The goal of this exercise is practise route life cycle.

###Before you start, please refer to:
* [angularjs-route-life-cycle](https://egghead.io/lessons/angularjs-route-life-cycle)

###Exercise
1. Before route change $scope:
    * add to **StartCtrl** ```goHome``` function, which
        * set ```message``` variable on $scope to ```I choose home!```
        * use ```$timeout``` to delay load path ```/home``` about ```2s```
    * add to **StartCtrl** ```goForest``` function, which
        * set ```message``` variable on $scope to ```I choose forest!!```
        * use ```$timeout``` to delay load path ```/forest``` about ```3s```
2. When route start change $scope
    * add to **$rootScope.$on** variable **start** set on ```The mission was started!```

3. When route change is success
    * add to **$rootScope.$on** condition: when **space** attribute, which received from promise is
        * set to **Kitchen** set ```mission``` variable on $scope to ```to make dinner.```
        * set to **Wood** set ```mission``` variable on $scope to ```light a campfire.```
        * **hint** :  search ```space``` in **current.local...**
    
4. When the next controller takes control
    * add to **HomeCtrl** and **ForestCtrl** controllers **message** variable and set it to message from **loadData**

Good luck!
