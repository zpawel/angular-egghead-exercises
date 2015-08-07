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
        ngRepeatStart: element.bind(null, by.css('div [ng-repeat-start]')),
        ngRepeat: element.bind(null, by.css('div [ng-repeat]')),
        ngRepeatEnd: element.bind(null, by.css('div [ng-repeat-end]')),
        people: element.all.bind(null, by.css('div [ng-repeat-start]')),
        food: element.all.bind(null, by.css('div [ng-repeat]'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
