describe('phone', function ()
{
    'use strict';

    var phoneCtrl;
    var window;
    var phoneBookArray = [{
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

    beforeEach(module('phoneApp'));

    beforeEach(inject(function ($controller)
    {
        phoneCtrl = $controller('PhoneCtrl');
    }));

    describe('PhoneCtrl', function ()
    {
        describe('initialization', function ()
        {
            it('should initialize phoneBook', function ()
            {
                expect(phoneCtrl.phoneBook).toEqual(phoneBookArray);
            });

            it('should initialize selectedPerson', function ()
            {
                expect(phoneCtrl.selectedPerson).toEqual(phoneBookArray[0]);
            });

            it('should initialize isShow', function ()
            {
                expect(phoneCtrl.isShow).toBe(false);
            });

        });

        describe('showPhone function', function ()
        {
            it('should change isShow property to true', function ()
            {
                beforeEach(function ()
                {
                    phoneCtrl.showPhone();
                });
                expect(phoneCtrl.isShow).toEqual(false);
            });

            it('should change isShow property to false', function ()
            {
                beforeEach(function ()
                {
                    phoneCtrl.showPhone();
                    phoneCtrl.showPhone();
                });

                expect(phoneCtrl.isShow).toEqual(false);
            });

        });

        describe('call function', function ()
        {
            beforeEach(inject(function ($window)
            {
                window = $window;
                spyOn(window, 'alert');
                phoneCtrl.call();
            }));

            it('should show alert', function ()
            {
                expect(window.alert).toHaveBeenCalledWith('ring ding ding ding...');
            });

        });
    });


});
