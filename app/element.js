'use strict';

var element = angular.module('elementApp', []);

element.directive('findElement', function ()
{   var validElement= angular.element('<h4></h4>')

    //create link function
    var link = function (scope)
    {
             scope.$watch('input', function(value){
                 if(value === 'circle'){
                     validElement.removeClass('square')
                    validElement.addClass('circle')
                     validElement.removeClass('text-danger')
                     validElement.text('')
                 }
                 else if (value === 'square'){
                     validElement.removeClass('circle')
                     validElement.addClass('square')
                     validElement.removeClass('text-danger')
                     validElement.text('')
                 }
                 else {
                     validElement.addClass('text-danger')
                     return validElement.text('You did not enter *circle* or *square*')
                 }

             })
    };

    return {
        restrict: 'E',
        replace: true,
        template: '<div> <input class="form-control" type="text" ng-model="input" placeholder="Write circle or square"></div>',
        compile: function (templateElement)
        {
            templateElement.append(validElement);
            return link;
            console.log(validElement);
        }

    };
});

