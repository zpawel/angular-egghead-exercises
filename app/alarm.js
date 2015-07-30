var app = angular.module('app', []);

//<!--add alarm directive-->
app.directive('alarm', function(){
    return{
        controller: function(){
            addCollorRed=function(){
               alert('ColorRed alarm!')
            }
            addCollorYellow=function(){
                alert('ColorYellow alarm!')
            }
            addCollorGreen=function(){
                alert('ColorGreen alarm!')
            }
        }

    }
})
//<!--add red directive-->
app.directive('red', function(){
    return{
        link: function addCollorRed(){

        }

    }
})
//<!--add yellow directive-->
app.directive('yellow', function(){
    return{
        link: function addCollorYellow(){

        }

    }
})
//<!--add green directive-->
app.directive('green', function(){
    return{
        link: function addCollorGreen(){

        }


    }
})