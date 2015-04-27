(function () {
    'use strict';

    var app = angular.module('app', []);

    app.factory('UsersList', function () {
        var usersList = {};
        usersList.list = [
            {
                name: 'Adam', lastName: 'Hart', country: 'Poland'
            },
            {
                name: 'Antonio', lastName: 'Turner', country: 'England'
            },
            {
                name: 'Jimmy', lastName: 'Wright', country: 'USA'
            },
            {
                name: 'Shirley', lastName: 'Harper', country: 'Italian'
            },
            {
                name: 'Randy', lastName: 'Watson', country: 'Greece'
            },
            {
                name: 'Gregory', lastName: 'Banks', country: 'German'
            },
            {
                name: 'Martha', lastName: 'Lawson', country: 'China'
            },
            {
                name: 'Eugene', lastName: 'Stanley', country: 'Cuba'
            },
            {
                name: 'Randy', lastName: 'Reyes', country: 'Egypt'
            },
            {
                name: 'Christopher', lastName: 'Ferguson', country: 'France'
            }
        ];

        return usersList;

    });

    app.controller('ViewCtrl', function (UsersList) {
        this.users = UsersList;
        this.toggle = function (index) {
            //complete function
            this.users.list[index].enable = !this.users.list[index].enable;
        };
    });
})
();
