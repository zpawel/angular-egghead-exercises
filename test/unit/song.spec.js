describe('song', function ()
{
    'use strict';

    var songCtrl;
    var spyInjector;

    beforeEach(module('songApp'));
    beforeEach(inject(function ($controller)
    {
        spyInjector = jasmine.createSpyObj('$injector', ['invoke']);
        songCtrl = $controller('SongCtrl', {$injector: spyInjector});

    }));

    describe('injector', function ()
    {
        it('should set call $injector.invoke', function ()
        {
            expect(spyInjector.invoke).toHaveBeenCalledWith(jasmine.any(Function));
        });
    });

});
