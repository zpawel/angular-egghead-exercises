describe('home', function ()
{
    'use strict';
    
    var homeCtrl;
    var homeProvider;

    beforeEach(function () {

        var fakeModule = angular.module('test.homeApp', function () {});
        fakeModule.config( function (HomeProvider) {
            homeProvider = HomeProvider;
        });
        module('homeApp', 'test.homeApp');

        inject(function () {});
    });

    beforeEach(inject(function ($rootScope, $controller, Home)
    {
        homeCtrl = $controller('HomeCtrl', {Home: Home});
    }));


    describe('provider', function ()
    {
        it('should be defined', function ()
        {
            expect(homeProvider).not.toBeUndefined();
        });

    });

    describe('color', function ()
    {
        it('should set default color value to yellow', function ()
        {
            expect(homeCtrl.color).toEqual('yellow');
        });

        it('should use setColor set the color', function ()
        {
            expect(homeProvider).not.toBeUndefined();
            homeProvider.setColor('green');

            expect(homeProvider.$get().color).toEqual('green');
        });

    });

    describe('number', function ()
    {
        it('should set default number to odd and return 100', function ()
        {
            expect(homeCtrl.number).toEqual(100);
        });

        it('should set even Number set to 100', function ()
        {
            expect(homeProvider).not.toBeUndefined();
            homeProvider.setNumber('24');

            expect(homeProvider.$get().number).toEqual(99);
        });

        it('should set odd number to 99', function ()
        {
            expect(homeProvider).not.toBeUndefined();
            homeProvider.setNumber('11');

            expect(homeProvider.$get().number).toEqual(100);
        });

    });


});
