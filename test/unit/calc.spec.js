describe('calc', function ()
{
    'use strict';

    var scope;
    var SumCtrl;
    var SubCtrl;

    beforeEach(module('calcApp'));

    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();

        SumCtrl = $controller('SumCtrl', {$scope: scope});
        SubCtrl = $controller('SubCtrl', {$scope: scope});
    }));

    describe('SumCtrl', function ()
    {
        describe('initialization', function ()
        {
            it('should set firstNumber to 12', function ()
            {
                expect(SumCtrl.firstNumber).toBe(12);
            });

            it('should set secondNumber to 1', function ()
            {
                expect(SumCtrl.secondNumber).toBe(1);
            });
        });
        describe('addition function', function ()
        {
            beforeEach(function ()
            {
                SumCtrl.addition(SumCtrl.firstNumber, SumCtrl.secondNumber);
            });
            it('should add the firstNumber and  the secondNumber variables', function ()
            {
                expect(SumCtrl.sum).toBe(13);
            });
        });
    });

    describe('SubCtrl', function ()
    {
        describe('initialization', function ()
        {
            it('should set firstNumber to 12', function ()
            {
                expect(SubCtrl.firstNumber).toBe(12);
            });

            it('should set secondNumber to 1', function ()
            {
                expect(SubCtrl.secondNumber).toBe(1);
            });
        });
        describe('subtraction function', function ()
        {
            beforeEach(function ()
            {
                SubCtrl.subtraction(SubCtrl.firstNumber, SubCtrl.secondNumber);
            });
            it('should subtract firstNumber and secondNumber', function ()
            {
                expect(SubCtrl.sub).toBe(11);
            });
        });
    });

});
