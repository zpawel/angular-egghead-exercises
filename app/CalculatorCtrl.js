var app = angular.module('app', []);

app.controller('CalculatorCtrl', function ()
{
    this.result = 0;
    this.results = [];

    this.addition = function (a, b)
    {
        this.result = a + b;
        this.results.push({type: 'add', result: this.result})
    };

});