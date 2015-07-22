#Exercise 29 : Route Life Cycle

##Summary
You start with the ready `start view`, where you will find two missions and an object to choose (you can take it with you). After choosing a mission, it should 
display an alert message for two seconds. Then you will be redirected to the appropriate page of the mission.

##Goals
* alert `message` before route change $scope should be set to `I choose home!`or `I choose forest!`
* `start` message when route start change $scope should be set to `The mission was started!`
* depending on the `space` attribute (received from promise) when route change is success `mission` should be set to `to make dinner` (when Home) `light a
 campfire.` (when Forest)
* `message` in controllers should come from `loadData`

##Before you start, please refer to:
* [angularjs-route-life-cycle](https://egghead.io/lessons/angularjs-route-life-cycle)


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
