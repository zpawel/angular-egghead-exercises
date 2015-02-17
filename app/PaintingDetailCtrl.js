app.controller("PaintingDetailCtrl", function ($scope, $stateParams)
{
    angular.forEach($scope.paintingList, function (element)
    {
        if ($stateParams.detail == element.id) {
            $scope.detail = element;
        }
    });

});
