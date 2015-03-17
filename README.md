##Exercise 66: Custom Jasmine Matchers 
Matcher is a comparison function that takes an actual value and expected value. Create your own matchers to test **addition** function from **CalculatorCtrl**

###Requirements
* create three matchers in **CalculatorCtrl.spec.js** file :
    * ***isEvenNumber()*** - checks if the number is an even number
    * ***isOddNumber()*** - checks if the number is an odd number
    * ***isGreaterThanTen()*** - checks if the number is greater than 10

###Result
* messages on failure test

![alt text](app/assets/test.jpg)

### Test Configuration:
* ```npm install```
* ```bower install```
* Run -> Edit Configuration -> Press plus button -> Pick up Node.js
* set JavaScript file to ```node_modules\karma\bin\karma```
* set Application parameters to ```start test\karma.conf.js```

###Before you start, please refer to:
* [angularjs-custom-jasmine-matchers](https://egghead.io/lessons/angularjs-custom-jasmine-matchers)

Good luck!
