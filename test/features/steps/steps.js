var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';


    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });


    this.When(/^I click "(\d+)" button$/, function (number, callback)
    {
        browser.actions().mouseMove((fragments('button')()).get(number - 1)).perform().then(function ()
        {
            (fragments('button')()).get(number - 1).click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });
    this.When(/^I click "([^"]*)"$/, function (element, callback)
    {
        browser.actions().mouseMove((fragments(element)())).perform().then(function ()
        {
            (fragments(element)()).click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });


    this.Then(/^I should be directed to "([^"]*)"$/, function (url, callback)
    {
        expect(browser.getCurrentUrl()).to.eventually.match(new RegExp(url.replace('/', '\/').replace('?', '\\?') + '$')).and.notify(callback);
    });

    this.Then(/^"(\d+)" button should have "([^"]*)" class$/, function (number, className, callback)
    {
        number = parseInt(number, 10);
        expect((fragments('buttons')()).get(number-1).getAttribute('class')).to.eventually.have.string(className).and.notify(callback);
    });

    this.Then(/^I should not see "([^"]*)"$/, function (element, callback)
    {
        expect((fragments(element)()).isPresent()).to.eventually.be.false.and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });
};
