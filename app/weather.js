var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope)
{
    $scope.weatherForecast = [
        { city: 'Krakow', temperature: '34°', describe: 'Partly sunny'},
        { city: 'Warsaw', temperature: '30°', describe: 'Dense fog'},
        { city: 'Białystok', temperature: '29°', describe: 'Cloud'}
    ];

    $scope.newWeather = { city: 'Katowice', temperature: '26°', describe: 'Sunny'};

    $scope.addWeather = function (weather)
    {
        $scope.weatherForecast.push(weather);
        $scope.newWeather = {};
    };

    $scope.currentTemp = 29;
    $scope.increaseTemp = function ()
    {
        $scope.currentTemp += 1;
    };

    $scope.decreaseTemp = function ()
    {
        $scope.currentTemp += -1;
    };
});
