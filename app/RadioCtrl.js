var myRadio = ;

myRadio.controller('RadioCtrl', function ($scope)
{
    var radioCtrl = this;
    radioCtrl.information = "I'm from controller";
});


myRadio.directive("onlyToPracticeDirective", function ()
{
    return function (scope, show, attribute)
    {
    }
});