(function ()
{
  'use strict';

  var moneyApp = angular.module('moneyApp', []);

  moneyApp.directive('money',function(){
    return{
      restrict:'E',
      scope:{
        forWhat:'@',
        howMany:'='
      },
      transculde:true,
      template:'<label for="devote" class="label label-default">How much to devote</label>\n<select id="devote" ng-model="howMany" ng-options="proposal for proposal in proposals"class="form-control"></select>\n<div class="text-center">\n    <h3 class="btn btn-default" ng-click="toggleContent()">{{forWhat || "For poor pets"}}</h3>\n    <div ng-show="isContentVisible" ng-transclude> <strong>{{takeMyMoney}}</strong></div>\n</div>',
      link:function(scope){
        scope.proposals=[10,20,30,40,50,60];
        scope.howMany=scope.proposals[0];
        scope.isContentVisible = false;

        scope.toggleContent = function ()
        {
          scope.isContentVisible = !scope.isContentVisible;
          scope.takeMyMoney = "Shut up and take my money!"
        }
      }

    };
  });

})();