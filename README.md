##Exercise 58: Testing Controllers With Dependencies
You start with a ready shop application. Is based on two controllers:
* **ProductCtrl** with list of products, functions responsible for counting the total price of the order and updating product count
* **CartCtrl** with two function for adding product to cart and removing product from cart
Your job is testing **CartCtrl** that uses the functions of **ProductCtrl** 
  
###Requirements
* complete the prepared test cases in **CartCtrl.spec.js** file
* don't forget to use spies!
* to not display tests from **ProductCtrl.spec.js** you can add **x** before first describe, like this ```xdescribe```

### Test Configuration:
* ```npm install```
* ```bower install```
* Run -> Edit Configuration -> Press plus button -> Pick up Node.js
* set JavaScript file to ```node_modules\karma\bin\karma```
* set Application parameters to ```start test\karma.conf.js```

###Before you start:
* [angularjs-testing-controllers-with-dependencies](https://egghead.io/lessons/angularjs-testing-controllers-with-dependencies)

Good luck!
