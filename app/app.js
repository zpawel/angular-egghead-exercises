(function () {
    'use strict';
    angular.module('countryStateCity', ['ngRoute']).config(function ($routeProvider, $filterProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html'
        });
        $routeProvider.otherwise('/');

        $filterProvider.register('formatPopulation', function () {
            return function (population) {
                if (!population) {
                    return 'I don\'t have data on this topic';
                }
                population = population.toString().split('').reverse();
                var tmp = [];
                for (var i = 0; i < population.length; i++) {
                    tmp.push(population[i]);
                    if (i % 3 === 2 && population.length - 1 > i) {
                        tmp.push('.');
                    }
                }
                return tmp.reverse().toString().split(',').join('');
            };
        });
    });

})();
