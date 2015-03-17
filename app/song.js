'use strict';

var app = angular.module('app', []);
app.factory('SongText', function ()
{
    return {song: 'Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...', newWord: 'purr'};
});
function NewWordCtrl($scope, SongText)
{
    $scope.data = SongText;
}

function SongCtrl($scope, SongText)
{
    $scope.data = SongText;
}
