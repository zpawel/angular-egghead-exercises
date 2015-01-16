var app = angular.module('weatherApp');

app.controller("shipCtrl", function ($scope, WeatherConditions)
{
  $scope.checkMyBoat = function (boat, conditions) {
    switch(conditions) {
      case 'stormy':
        return false;
      case 'windy':
      case 'heavy rain':
        return boat === 'Sloop' ? false : true;
      case 'cloudy':
      case 'clear':
      case 'sunny':
        return true;
      default:
        return false;
    }
    return false;
  };
  
  $scope.currentConditions = WeatherConditions.getCurrentConditions();
});

app.directive('shipSender', function () {
  return {
    restrict: 'E',
    scope: {
      customCheck: '&',
      conditions: '@'
    },
    template: '<div class="ship relative">'
        + '<div class="bubble" ng-if="answer">Set sails!</div>'
        + '<div class="col-md-offset-1 col-md-10 align-bottom"><select class="form-control" ng-options="item for item in [\'Sloop\', \'Ship\', \'Towboat\', \'Brig\']" ng-model="myBoat"></select>'
        + '<div class="btn btn-info voffset" ng-click="answer = customCheck({boat: myBoat, currentConditions: conditions})">Check</div></div></div>'
  }
});
