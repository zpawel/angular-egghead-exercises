var songApp = angular.module("songApp", []);

songApp.factory("song", function () {
    return {
        author: "Gotye feat. Kimbra",
        title: "Somebody That I Used To Know",
        sing: function () {
            return "But you didn't have to cut me off... But you treat me like a stranger ..."
        },
        fake: function () {
            return "Buuuuuuuuuuuuuut you niah niah blah bla ..."
        }
    }
});

songApp.controller("SongCtrl", function ($scope, song) {
    $scope.author = song.author;
    $scope.title = song.title;
    $scope.sing = song.sing();
    $scope.fake = song.fake();
});