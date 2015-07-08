describe('restrict', function () {
    'use strict';

    var window;
    var scope;
    var restrictE;
    var restrictA;
    var restrictC;
    var restrictM;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile, $controller, $window) {

        window = $window;
        scope = $rootScope.$new();
        $controller('AppCtrl', {$scope: scope});

        restrictE = angular.element('<restrict-e></restrict-e>');
        restrictA = angular.element('<div restrict-a></div>');
        restrictC = angular.element('<div class="restrict-c"></div>');
        restrictM = angular.element('<!-- directive: restrict-m -->');

        $compile(restrictE)(scope);
        $compile(restrictA)(scope);
        $compile(restrictC)(scope);
        scope.$digest();

    }));

    describe('restrict-e directive', function () {
        it('should display "E: this directive use restrict E" message.', function () {
            expect(restrictE.text()).toBe('E: this directive use restrict E');
        });
    });
    describe('restrict-a directive', function () {
        it('should display "A: this directive use restrict A" message.', function () {
            expect(restrictA.text()).toBe('A: this directive use restrict A');
        });
    });
    describe('restrict-c directive', function () {
        it('should display "C: this directive use restrict C" message.', function () {
            expect(restrictC.text()).toBe('C: this directive use restrict C');
        });
    });
    describe('restrict-m directive', function () {
        beforeEach(inject(function ($compile) {
            spyOn(window, 'alert');
            $compile(restrictM)(scope);
            scope.$digest();
        }));
        it('should display "Restrict M: working..." alert message', function () {
            expect(window.alert).toHaveBeenCalledWith('Restrict M: working...');
        });
    });


});
