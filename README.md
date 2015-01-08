##Exercise 34b: "Controller as" Syntax
The goal of this exercise is practise directive ng-repeat

###Before you start, please refer to:
* [angularjs-experimental-controller-as-syntax](https://egghead.io/lessons/angularjs-experimental-controller-as-syntax)

###Exercise

1. In index.html add controller exerciseCtrl as exercise
2. Write routing:
    * when path is ```/``` display ```exercise.html``` without controller
    * when path is ```/success``` display success.html with controller ```exerciseCtrl``` as ```simple```
    * ```otherwise``` redirect to ```/```

2. In exerciseCtrl:
    * complete method ```set``` write condition when ```success``` and ```unSuccess``` is NOT defined should nothing doing
        * when is defined should set respectively in factory ```success``` and ```unSuccess```
        * and redirect user to ```'/success'```
    * complete method ```get``` you should resolve promise use ```then``` (remember construct then and catch)
        * hint:in resolve  promise this NOT always indicates controller (you must use other indicates)
    * complete method ```getUnSuccess``` in this method use ```catch```

3. In simplePromise:
    * complete method ```set```,
    * in method ```getSuccess```
        * defined variable and use library ```$q ```to create promise
        * use method ```resolve``` with ```success```
        * return property ```promise```
    * in method getUnSuccess
        * based on method ```getSuccess``` but use method ```reject``` instead ```resolve```


Good luck!