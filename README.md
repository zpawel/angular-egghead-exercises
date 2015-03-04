##Exercise 56: ui-router Named Views
ui-router library is useful for dividing up your application into sections, and changing the content of a section based on the current state.
Use ui-router which provides the ability to name views within in shoes shop. Application has three tabs: Home, Men, Women. 

###Requirements
* complete **app.js** file with stateProvider configuration 
    * create **app** state 
    * add templates from **common** folder to views property
* add states to home view - index.html(see result 1)
* create **men** state which 
    * should change **content** view with new content that displays men's shoes (new content requires controller)
    * should "remove" footer view (add empty footer property)
* add new state to **mainbar** navigation
*  create **women** state which
    * should change **content** with new content that displays types of shoes, 
    * should change **header** view with new that displays red high heels, 
    * should "remove" footer view
    * should have **subcontent** view, which enables to change data in **content**
* use **app.women.flats** and **app.women.pumps** states to change **subcontent** in **women.content** 

###Result
1) home view with header, mainbar, content, footer

![alt text](app/assets/1.jpg)

2) men's shoes

![alt text](app/assets/2.jpg)

3) types of women's shoes

![alt text](app/assets/3.jpg)

4) flats shoes

![alt text](app/assets/4.jpg)

5) pumps shoes

![alt text](app/assets/5.jpg)

###Before you start:
* [angularjs-ui-router-named-views](https://egghead.io/lessons/angularjs-ui-router-named-views)
* run ```bower install``` command and add **angular-ui-router** to **index.html** and **ui-router** dependency to application

Good luck!
