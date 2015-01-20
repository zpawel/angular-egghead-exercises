var fifaApp = angular.module("fifaApp", []);

<!--log-->

fifaApp.controller("FifaCtrl", function ($scope)
{
    $scope.ranking = [
        { team: "Germany", points: 1725 },
        { team: "Argentina", points: 1583},
        { team: "Colombia", points: 1450},
        { team: "Belgium", points: 1417},
        { team: "Netherlands", points: 1374}
    ];

    $scope.PolandRank = false;

    $scope.showPolandRank = function ()
    {
        $scope.PolandRank = $scope.PolandRank ? false : true;
    };

});
