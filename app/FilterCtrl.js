var myApp = angular.module('myApp', []);

myApp.filter('quote', function ()
{
    return function (text)
    {
    }
});

myApp.filter('firstLetterUpp', function ()
{
    return function (text, all)
    {

    }
});


function FilterCtrl($scope)
{
    $scope.data = {
        citation: "To be, or not to be...",
        title: "The Hobbit: The Battle of the Five Armies",
        someText: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories."
    }
}
