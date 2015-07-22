var app = angular.module('app', []);

app.factory('SongText', function ()
{
    return {song: 'Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...', newWord: 'purr'};
});

app.controller('NewWordCtrl', function ($scope, SongText)
{
    $scope.data = SongText;
    $scope.replaceWord = function(text, word, newWord){
        console.log(text.replace(word,newWord));
        return text.split(word).join(newWord);

    }
});

app.controller('SongCtrl', function ($scope, SongText)
{
    $scope.data = SongText;
});