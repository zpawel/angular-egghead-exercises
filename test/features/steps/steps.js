var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

    function selectOption(item, input) {
        var desiredOption = null;
        return input.all(protractor.By.tagName('option')).getWebElements().then(function (options) {
            options.some(function (option) {
                option.getText().then(function (text) {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function () {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    }

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });


    this.When(/^I select option "([^"]*)" in "([^"]*)"$/, function (item, element, callback) {
        selectOption(item, fragments(element)()).then(callback);
    });

    this.Then(/^I should see "([^"]*)" text in "([^"]*)"$/, function (text, element, callback)
    {
        expect(fragments(element)().getText()).to.eventually.equal(text).and.notify(callback);
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

    this.Then(/^I should see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.Then(/^It should display "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isDisplayed()).to.become(true).and.notify(callback);
    });

    this.Then(/^It should not display "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isDisplayed()).to.become(false).and.notify(callback);
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
