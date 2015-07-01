describe('song', function ()
{
    'use strict';

    var scope;
    var song;
    var oldWord;
    var newWord;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, SongText)
    {
        scope = $rootScope.$new();
        song = SongText.song;
        newWord = SongText.newWord;

        $controller('NewWordCtrl', {$scope: scope, SongText: SongText});
    }));

    describe('replaceWord function', function ()
    {
        it('should call replaceWord function and change oldWord to newWord', function ()
        {
            newWord = 'o';
            oldWord = 'purr';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, o, o, o...');
        });

        it('should call replaceWord function and replace the oldWord in new text song', function ()
        {
            song = 'I sing a song: oo, oo';
            oldWord = 'oo';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('I sing a song: purr, purr');
        });
    });
});