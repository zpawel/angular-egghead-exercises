/*jshint -W079 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function () {
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback) {
        browser.get('/#' + url).then(callback);
    });

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

    this.When(/^I select option "([^"]*)" in "([^"]*)" order component/, function (item, order, callback) {
        order = order === 'cake' ? 0 : 1;
        var orderSelect = fragments('orders')().get(order).element(by.tagName('select'));
        selectOption(item, orderSelect).then(callback);

    });

    this.When(/^I click "([^"]*)" in "([^"]*)" order component/, function (name, order, callback) {
        order = order === 'cake' ? 0 : 1;
        browser.actions().mouseMove(fragments(name)().get(order)).perform().then(function () {
            fragments(name)().get(order).click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)" list$/, function (buyProducts, list, callback) {
        buyProducts = buyProducts.split(',');
        expect(fragments(list)().getText()).to.eventually.eql(buyProducts).and.notify(callback);
    });


    this.Then(/^pause$/, function (callback) {
        browser.pause();
        callback();
    });


};
