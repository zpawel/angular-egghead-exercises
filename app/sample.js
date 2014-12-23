var provider = angular.module("provider", []);

provider.config(function(){

});

provider.controller('appCtrl',function($scope){
    $scope.message='I come from a controller:)';
});