##Exercise 31 : Injectors

###The goal
Application was wrote by NOT experienced web developer and he call
the variable how he want which caused a lot of mistakes and lack of
appropriate relevant parameters in controllers....we do NOT want to rewrite the application.
Can you help us??


####Requirements
  * You can NOT change definition the arguments list which were defined can NOT be change in controllers and view.
  * You have to complete methods **set** and **setToTrue** in service listParts.
   Method set should available to toggle car parts in list and return this,
   **setToTrue** should returns true in every time, but data should be saved in correct part
  * When You click **I can't wait, check it now!** You should call method in **set** in **listParts** (check comments)
  * When You click **I can wait** You should call method in **setToTrue** in **listParts** (check comments)
  * You should display *```green```* message *```This part is available and is very cheap```* if part is available .
  * When part is NOT available You should display *```red```* message *```This part is NOT available is very expensive...```*


###Before you start, please refer to:
  * [injectors](https://egghead.io/lessons/angularjs-injectors)
  * [angular 1.2.16 - $injector](https://code.angularjs.org/1.2.16/docs/api/auto/service/$injector)
  * [angular.forEach](https://docs.angularjs.org/api/ng/function/angular.forEach)



Good luck!