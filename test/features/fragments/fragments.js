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
        inputs: {
            first: element.bind(null, by.id('first')),
            second: element.bind(null, by.id('second')),
            third: element.bind(null, by.id('third'))
        },
        records: {
            success: element.bind(null, by.css('success')),
            info: element.bind(null, by.css('info')),
            danger: element.bind(null, by.css('danger')),
            firstRecord: element.bind(null, by.id('firstRecord')),
            secondRecord: element.bind(null, by.id('secondRecord')),
            thirdRecord: element.bind(null, by.id('thirdRecord'))
        }
    };

    return byString(mapping, text);
};

module.exports = fragments;
