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
        homeButton: element.bind(null, by.id('homeButton')),
        forestButton: element.bind(null, by.id('forestButton')),
        radio: element.all.bind(null, by.tagName('input')),
        start: element.bind(null, by.binding('start')),
        message: element.bind(null, by.binding('message')),
        selectedThing: element.bind(null, by.binding('data.selectedThing'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
