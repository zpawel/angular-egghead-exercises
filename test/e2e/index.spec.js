describe("weatherApp", function ()
{
    describe("index", function ()
    {
        it("should display the correct title", function ()
        {
            browser.get('/#');
            expect(browser.getTitle()).toBe('AngularJS Tutorials');
        });

        it("should display the increase temperature when plus button clicked", function ()
        {

        });

        it("should display the increase temperature when minus button clicked", function ()
        {

        });
    });
});