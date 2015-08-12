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


    this.When(/^I click "([^"]*)"/, function (name, callback)
    {
        browser.actions().mouseMove(fragments(name)()).perform().then(function ()
        {
            fragments(name)().click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.When(/^I click "(\d+)" row of "([^"]*)" table$/, function (row, table, callback)
    {
        var rowElement = fragments(table)().element(by.css('tbody tr:nth-of-type(' + row + ')'));
        rowElement.click().then(function ()
        {
            return browser.waitForAngular();
        }).then(callback);
    });


    this.Then(/^I should see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" for "([^"]*)" in "([^"]*)"$/, function (text, number, element, callback)
    {
        number = parseInt(number, 10);
        expect((fragments(element)().get(number - 1)).getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)" column in row "(\d+)" of "([^"]*)" table$/, function (expectedText, columnName, row, table, callback)
    {
        row = parseInt(row, 10);
        var rowElement = fragments(table)().element(by.css('tbody tr:nth-of-type(' + row + ')'));
        table = table.split('.');
        table.pop();
        table.push(columnName);
        var columnElement = fragments(table.join('.'))();
        expect(rowElement.element(columnElement.locator()).getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" in "(\d+)" row  of "([^"]*)" table$/, function (expectedText, row, table, callback)
    {
        row = parseInt(row, 10);
        var rowElement = fragments(table)().element(by.css('tbody tr:nth-of-type(' + row + ')'));
        expect(rowElement.getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.Then(/^I should not see "([^"]*)"$/, function (element, callback)
    {
        expect((fragments(element)()).isPresent()).to.eventually.be.false.and.notify(callback);
    });


    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });
};
