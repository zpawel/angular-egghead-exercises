##Exercise 25 : $routeProvider
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)
* [angularjs-routeparams](https://egghead.io/lessons/angularjs-routeparams)
* [angularjs-redirectto](https://egghead.io/lessons/angularjs-redirectto)
* type ```bower install``` in console to download required dependencies

###Exercise
* In app.js:
    * Add **ngRoute** dependency to your module
    * Using ```$routeProvider```:
        * When you enter **'/'** path you should display ```carDetails.html``` (and use appCtrl controller for all of the entries)
        * When you enter **'/detail/```[...]```'** you should display ```display.html```.
          Moreover, please modify the path so it would accept ```:brand``` and ```:capacity``` route params,
          and bind their values the appCtrl $scope (according to the field names)
        * When you enter **'/display/```[...]```'** you should display ```display.html```
        * When you enter '/secret' you should display ```success.html```.
        * when you enter ```secret``` in any ```input``` at '/' and click ```Next step``` you should be redirected to ```/secret```
          ( *Hint* check ```Next step``` link and use redirectTo property to implement logic)
    * in appCtrl:
        * set *$scope.brand* to correct property from **$routeParams**
        * set *$scope.capacity* to correct property from **$routeParams** (*hint*: values from path)

Good luck!