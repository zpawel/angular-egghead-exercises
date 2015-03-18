'use strict';
var app = angular.module('app', []);

app.service('songService', function ($http)
{
    return{

        get: function ()
        {
            return  $http.get('http://localhost:3000/favourite_songs');
        },
        add: function (favouriteSong)
        {
            return $http.post('http://localhost:3000/favourite_songs', favouriteSong);
        },
        remove: function ()
        {
            return $http.delete('http://localhost:3000/favourite_songs');
        }
    };
});


app.controller('AppCtrl', function ($http, songService)
{
    var ctrl = this;

    songService.get().success(function (data)
    {
        ctrl.favouriteSongs = data;
    });

    ctrl.addFavouriteSong = function (favouriteSong)
    {
        songService.add(favouriteSong).success(function (data)
        {
            ctrl.favouriteSongs = data;
            ctrl.favouriteSong = {artist: '', title: ''};

        });
    };

    ctrl.removeFavouriteSongs = function ()
    {
        songService.remove().success(function (data)
        {
            ctrl.favouriteSongs = data;
        });

    };
});
