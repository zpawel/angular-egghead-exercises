'use strict';
var homeApp = angular.module('homeApp', []);



// add homeApp.provider 
homeApp.provider('Home', function(){
    var number,color;
    return{
        setColor: function(value){
            color = value;
        },
        setNumber: function(value){
            number = value;

        },
        $get: function(){
            return{
                color: color,
                number: number % 2 ? 100 : 99
            }
        }
    }
});

// add homeApp.config
homeApp.config(function (HomeProvider){
    HomeProvider.setColor('yellow');
    HomeProvider.setNumber(67);
});

// remove factory 
//homeApp.factory('Home', function() {
//    var exampleNum = 67;
//    return {
//        color: 'red',
//        number: exampleNum % 2 ? 100 : 99
//    };
//});

homeApp.controller('HomeCtrl', function (Home)
{
    var ctrl = this;
    ctrl.color = Home.color;
    ctrl.number = Home.number;
});