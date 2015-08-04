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
        partList: element.bind(null, by.css('code')),
        partsList: element.all.bind(null, by.tagName('input')),
        chooseButton: element.bind(null, by.id('chooseButton')),
        checkNowButton: element.bind(null, by.id('checkNowButton')),
        waitButton: element.bind(null, by.id('waitButton')),
        message: element.bind(null, by.binding('car.returnMessage'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
