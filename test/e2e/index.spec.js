describe("weatherApp", function ()
{
    beforeEach(function ()
    {
        browser.get('/#');

    });
    describe("index", function ()
    {
        it("should display the correct title", function ()
        {
            expect(browser.getTitle()).toBe('AngularJS Tutorials');
        });

        it("should display the increase temperature when plus button clicked", function ()
        {
            var upButton = element(by.id('upButton'));
            var currentTemp = element(by.binding('currentTemp'));
            upButton.click();

            expect(currentTemp.getText()).toBe('30 °C');
        });

        it("should display the increase temperature when plus button clicked", function ()
        {
            var downButton = element(by.id('downButton'));
            var currentTemp = element(by.binding('currentTemp'));
            downButton.click();

            expect(currentTemp.getText()).toBe('28 °C');
        });
    });
});
