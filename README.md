#Exercise 25 : $routeProvider

##Summary
Use knowledge about elements as **$routeProvider**, **$routeParams** and **redirectTo** to create routing.
Views and controllers are ready.

##Goals
 * default page is `home.html`
 * `brand` and `capacity` from inputs are used as route params (take a look at home.html `Next step` button)
 * `Next step` button should redirect to `details.html` page (path should start with `details/`), 
 * `Back step` button should redirect to `details.html` page, 
 * entered word `secret` into `brand` or `capacity` field and you should be direct to `secret.html` page
 * **hint** : check that the path of contains the word `secret` (you can split the path)

##Before you start, please refer to:
* [angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)
* [angularjs-routeparams](https://egghead.io/lessons/angularjs-routeparams)
* [angularjs-redirectto](https://egghead.io/lessons/angularjs-redirectto)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
