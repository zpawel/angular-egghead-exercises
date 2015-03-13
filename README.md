##Exercise 64: Testing With Protractor Page Objects
Page Objects abstract the interaction between the browser and functional tests. 
Create **IndexPage** object that provides API for interacting with the page and test.

###Requirements
* move elements responsible for increase / decrease and display temperature to the **IndexPage** object
* tests should succeed after refactoring

### Test Configuration:
* ```npm install -g protractor```
* ```webdriver-manager update```
* ```npm install -g httpster```
* ```bower install```

###Test start
* you need two terminal windows:
    * in the first go to the app folder ```cd app``` and run ```httpster``` command
    * in the second terminal window run tests with ```protractor test/protractor.conf.js```


###Before you start:
* [angularjs-testing-with-protractor-page-objects](https://egghead.io/lessons/angularjs-testing-with-protractor-page-objects)
* [protractor](http://angular.github.io/protractor/#/)

Good luck!
