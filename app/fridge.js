var fridgeApp = angular.module("fridgeApp", []);

fridgeApp.controller("FridgeCtrl", function ()
{
    this.list = [
        { id: 1, name: "Austin", fridge: [
            {name: "banana", count: 4 },
            {name: "ham", count: 1 },
            {name: "tomato", count: 1}
        ]},
        { id: 2, name: "Ben", fridge: [
            {name: "banana", count: 4 },
            {name: "wasabi", count: 2 },
            {name: "ham", count: 1 },
            {name: "cheese", count: 2}
        ]},
        { id: 3, name: "Willy", fridge: [
            {name: "milk", count: 10}
        ]},
        { id: 4, name: "Maxine", fridge: [
            {name: "tomato", count: 1},
            {name: "milk", count: 3 },
            {name: "butter", count: 2 }
        ]}
    ];
});

