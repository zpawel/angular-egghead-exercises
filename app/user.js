'use strict';

var app = angular.module('app', []);
app.factory('Users', function ()
{
    var Users = {};
    Users.list = [
        {'id': 1, 'gender': 'Male', 'fullName': 'Adam Hart', 'username': 'ahart0'},
        {'id': 2, 'gender': 'Male', 'fullName': 'Antonio Turner', 'username': 'aturner1'},
        {'id': 3, 'gender': 'Male', 'fullName': 'Jimmy Duncan', 'username': 'jduncan2'},
        {'id': 4, 'gender': 'Male', 'fullName': 'Johnny Wright', 'username': 'jwright3'},
        {'id': 5, 'gender': 'Female', 'fullName': 'Shirley Watson', 'username': 'swatson4'},
        {'id': 6, 'gender': 'Male', 'fullName': 'Randy Harper', 'username': 'rharper5'},
        {'id': 7, 'gender': 'Male', 'fullName': 'Gregory Lawson', 'username': 'glawson6'},
        {'id': 8, 'gender': 'Female', 'fullName': 'Martha Banks', 'username': 'mbanks7'},
        {'id': 9, 'gender': 'Male', 'fullName': 'Eugene Reyes', 'username': 'ereyes8'},
        {'id': 10, 'gender': 'Male', 'fullName': 'Randy Stanley', 'username': 'rstanley9'},
        {'id': 11, 'gender': 'Female', 'fullName': 'Elizabeth Turner', 'username': 'eturnera'},
        {'id': 12, 'gender': 'Male', 'fullName': 'Christopher Ferguson', 'username': 'cfergusonb'},
        {'id': 13, 'gender': 'Male', 'fullName': 'Robert Mcdonald', 'username': 'rmcdonaldc'},
        {'id': 14, 'gender': 'Female', 'fullName': 'Angela Boyd', 'username': 'aboydd'},
        {'id': 15, 'gender': 'Female', 'fullName': 'Frances Armstrong', 'username': 'farmstronge'}

    ];

    return Users;
});

app.controller('UserCtrl', function ($scope, Users)
{
    $scope.users = Users;
    $scope.limit = 15;

    $scope.predicate = 'name';
    $scope.reverse = true;
    $scope.reverseSort = function(predicate) {
        if ($scope.predicate === predicate) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }
        $scope.predicate = predicate;
    };



});