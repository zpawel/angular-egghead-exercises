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
        button: element.all.bind(null, by.css('#button')),
        backButton: element.bind(null, by.css('#backButton')),
        alertMessage: element.bind(null, by.css('#alertMessage')),
        list: element.bind(null, by.css('div [ng-repeat]')),
        listWithIndex: element.bind(null, by.repeater('item in list track by $index')),
        buttons: element.all.bind(null, by.css('button[ng-class][id][ng-click]'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
