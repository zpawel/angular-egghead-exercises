##Exercise 22 : templateUrl
The goal of this exercise is practise writing directive, factory and controllers

###Before you start, please refer to:
* [angularjs-templateurl](https://egghead.io/lessons/angularjs-templateurl)
* [angularjs-ngIf](https://docs.angularjs.org/api/ng/directive/ngIf)


###Exercise

* In index.html
    * Use url directive as follows:
      ```<url title="{{title}}" data="{{content}}"></url>```
      When title value equals string value "secret", directive should display ```"Good work, you've found a secret!"``` and otherwise just use the template above.
* You should correctly set directive properties according to the expected results
    * hint: templateUrl and scope.

* In your script  **urlTemplate.html**
    * Using ```ng-if``` You are supposed to display correct **div** element according to the title attribute(In your template You should create
    structure as follows:
    ```
    <button ng-click="">(here display title)</button>
    <div ng-show=""> hint:here you show content
      <div ng-if=""></div>hint:here display data
      <div ng-if="">Good work[...]</div>
    </div>
    ```
    * Parent element should show along with children only when You click the button. The first children div should display the data, while the other one should display a secret in previously mentioned case.



Good luck!