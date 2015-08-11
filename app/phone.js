'use strict';

var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('PhoneCtrl', function ()
{
    var ph = this;
    ph.phoneBook = [{
        name: 'Warner Bridges', number: '+1 (914) 451-3055'
    }, {
        name: 'Bauer Spencer', number: '+1 (942) 551-2179'
    }, {
        name: 'Good Burnett', number: '+1 (820) 450-3124'
    }, {
        name: 'Austin Harvey', number: '+1 (957) 597-2822'
    }, {
        name: 'Candace Gordon', number: '+1 (932) 408-2012'
    }];

    ph.selectedPerson = ph.phoneBook[0];

    ph.phone = false;

    ph.showPhone = function ()
    {
        ph.phone = ph.phone ? false : true;
    };

    ph.call = function ()
    {
        alert('ring ding ding ding...');
    };


});
