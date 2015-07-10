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

    function clearAndType(webElement, text)
    {
        text = text.replace(/\\n/g, protractor.Key.ENTER);
        return webElement.getAttribute('type').then(function (type)
        {
            if ('date' !== type) {
                return webElement.clear().then(function ()
                {
                    return webElement.sendKeys(text);
                });
            } else {
                return webElement.sendKeys(text);
            }
        });
    }

    function selectOption(item, input)
    {
        var desiredOption = null;
        return input.all(protractor.By.tagName('option')).getWebElements().then(function (options)
        {
            options.some(function (option)
            {
                option.getText().then(function (text)
                {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function ()
        {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    }

    function selectElement(element)
    {
        return (element.toLowerCase()) === 'first' ? 0 : element = element === 'second' ? 1 : 2;

    }

    this.When(/^I enter "(.*)" into "(.*)" box in "(.*)" field$/, function (text, box, field, callback)
    {
        var webElement = fragments(field)().get(selectElement(box));
        clearAndType(webElement, text).then(callback);

    });

    this.When(/^I select option "([^"]*)" in "([^"]*)" into "([^"]*)" box$/, function (item, input, box, callback)
    {
        selectOption(item, fragments(input)().get(selectElement(box))).then(callback);
    });

    this.Then(/^I click "([^"]*)" in "([^"]*)" box$/, function (name, box, callback)
    {
        browser.actions().mouseMove(fragments(name)().get(selectElement(box))).perform().then(function ()
        {
            fragments(name)().get(selectElement(box)).click().then(function ()
            {
                browser.switchTo().alert().then(function (alert)
                {
                    expect(alert.getText()).to.eventually.equal('Blah').and.notify(callback);

                    return alert.dismiss();

                })

            });
        });
    });


    this.Then(/^I should see "(.*)" into "(.*)" box in "(.*)" field$/, function (text, box, field, callback)
    {
        expect(fragments(field)().get(selectElement(box)).getText()).to.eventually.equal(text).and.notify(callback);
    });

    //this.Then(/^I should see "(.*)" alert message$/, function (text, callback)
    //{
    //    browser.switchTo().alert().then(function (alert)
    //    {
    //        if (alert) {
    //            alert.getText(function (alertText)
    //            {
    //                expect(alertText).to.eventually.equal('Bla bla');
    //            });
    //            return alert.dismiss();
    //        }
    //    }).then(callback);
    //
    //});

    this.Then(/^"(.*)" "(.*)" should change color to "(.*)"$/, function (box, square, color, callback)
    {
        if (color === 'blue') {
            color = 'rgba(0, 0, 255, 1)';
        } else if (color === 'red') {
            color = 'rgba(255, 0, 0, 1)';
        } else if (color === 'green') {
            color = 'rgba(0, 0, 255, 1)';
        }
        expect((fragments(square)().get(selectElement(box))).getCssValue('backgroundColor')).to.eventually.equal(color).and.notify(callback);
    });

//this.When(/^I enter "(.*)" into "(.*)" field of "(\d+)" box$/, function (text, name, number, callback)
//{
//     //number = parseInt(number, 10);
//    var webElement = fragments(name)()
//    clearAndType(webElement, text).then(callback);
//});
//

//
//this.When(/I select option "([^"]*)" for "(\d+)" ship$/, function (item, ship, callback) {
//    ship = parseInt(ship, 10);
//    var shipElement = fragments('port.ships')().get(ship).element(by.css('.form-control'));
//    selectOption(item, shipElement).then(callback);
//
//});
//
//this.When(/^I click "([^"]*)"/, function (name, callback) {
//    browser.actions().mouseMove(fragments(name)()).perform().then(function () {
//        fragments(name)().click().then(function () {
//            return browser.waitForAngular();
//        }).then(callback);
//    });
//});
//
//this.When(/^I click "([^"]*)" for "(\d+)" ship/, function (name, ship, callback) {
//    ship = parseInt(ship, 10);
//    browser.actions().mouseMove(fragments(name)().get(ship)).perform().then(function () {
//        fragments(name)().get(ship).click().then(function () {
//            return browser.waitForAngular();
//        }).then(callback);
//    });
//});
//
//
//this.Then(/^I should see "([^"]*)"$/, function (image, callback) {
//    expect(fragments(image)().isPresent()).to.become(true).and.notify(callback);
//});
//
//this.Then(/^I should see "([^"]*)" message for "(\d+)" ship$/, function (text, ship, callback) {
//    ship = parseInt(ship, 10);
//    expect(((fragments('port.ships')().get(ship)).element(by.css('.bubble'))).getText()).to.eventually.equal(text).and.notify(callback);
//});
//
//this.Then(/^I should not see message for "([^"]*)" ship$/, function (ship, callback) {
//    ship = parseInt(ship, 10);
//    expect((fragments('port.ships')().get(ship)).element(by.css('.bubble')).isPresent()).to.become(false).and.notify(callback);
//});
//
//this.Then(/^the css element "([^"]*)" should contain the text "(.*)"$/, function (cssClass, text, callback) {
//    expect(element(by.css(cssClass)).getText()).to.eventually.equal(text).and.notify(callback);
//});
//
//this.Then(/^pause$/, function (callback)
//{
//    browser.pause();
//    callback();
//});

};
