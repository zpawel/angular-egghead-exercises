var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope)
{

    $scope.languages = [
        {'id': '1', 'name': 'English'},
        {'id': '2', 'name': 'German'},
        {'id': '3', 'name': 'Italian'},
        {'id': '4', 'name': 'Java'}
    ];
    $scope.languages = ['English', 'German', 'Italian', 'Java'];
    $scope.details = {licence: 'yes', language: $scope.languages[0]}

});