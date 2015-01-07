var provider = angular.module("provider", []);

provider.config(function(){

});

provider.controller('appCtrl',function($scope){

    this.display=function(){
        this.message = 'I come from a controller:)';
    };
});