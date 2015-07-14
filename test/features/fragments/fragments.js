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
        unitInput: element.bind(null, by.id('unit')),
        unitMessage: element.bind(null, by.css('.text-success')),
        unitButton: element.bind(null, by.id('unitButton')),
        separateInput: element.bind(null, by.id('separate')),
        separateMessage: element.bind(null, by.css('.text-danger')),
        separateButton: element.bind(null, by.id('separateButton'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
