/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        sum: {
            firstNumber: element.bind(null, by.id('firstNumberSum')),
            secondNumber: element.bind(null, by.id('secondNumberSum')),
            button: element.bind(null, by.id('sumButton')),
            result: element.bind(null, by.id('sumResult'))
        }, sub: {
            firstNumber: element.bind(null, by.id('firstNumberSub')),
            secondNumber: element.bind(null, by.id('secondNumberSub')),
            button: element.bind(null, by.id('subButton')),
            result: element.bind(null, by.id('subResult'))
        }, multi: {
            firstNumber: element.bind(null, by.id('firstNumberMulti')),
            secondNumber: element.bind(null, by.id('secondNumberMulti')),
            button: element.bind(null, by.id('multiButton')),
            result: element.bind(null, by.id('multiResult'))
        }, divide: {
            firstNumber: element.bind(null, by.id('firstNumberDiv')),
            secondNumber: element.bind(null, by.id('secondNumberDiv')),
            button: element.bind(null, by.id('divideButton')),
            result: element.bind(null, by.id('divideResult'))
        }
    };
    return byString(mapping, text);
};

module.exports = fragments;
