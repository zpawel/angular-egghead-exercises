##Exercise 31 : Injectors

In this simple application - the customer selects the required part of his car and then decides whether to wait for parts or check their availability.
Implement **checkNow()** and **wait()** function using **$injector** 

###Requirements
  * if the client decides to wait ( **I can wait 3 seconds** ) use a function that turns all the products available
  * when button **I can't wait, check it now!** was clicked, it should use a function that returns the 'availability' chosen car part
  * display **This part is available and is very cheap** message if part is available .
  * when part is NOT available you should display  **This part is NOT available and is very expensive...** message

###Results
* start view

![alt text](app/assets/1.png "1")

* choose car part

![alt text](app/assets/2.png "2")

* **I can wait 3 seconds** button clicked always return **This part is available and is very cheap** message

![alt text](app/assets/3.png "3")

* **I can't wait, check it now!** button clicked return message depending on product availability

![alt text](app/assets/4.png "4![alt text](app/assets/3.png "3")
")

###Before you start, please refer to:
  * [angularjs-injectors](https://egghead.io/lessons/angularjs-injectors)

Good luck!
