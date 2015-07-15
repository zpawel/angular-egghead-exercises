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
        order: element.bind(null, by.id('order')),
        quantity: element.bind(null, by.id('quantity')),
        template: element.bind(null, by.id('template')),
        buttonTemplate: element.bind(null, by.id('buttonTemplate')),
        default: element.bind(null, by.id('default')),
        button: element.bind(null, by.id('button')),
        table: element.bind(null, by.id('table')),
        templateContent: element.bind(null, by.id('templateContent')),
        buttonContent: element.bind(null, by.id('buttonContent')),
        tableContent: element.bind(null, by.id('tableContent'))

    };

    return byString(mapping, text);
};

module.exports = fragments;
