describe("ProductCtrl", function ()
{
    var $scope, controller;

    beforeEach(function ()
    {
        module('controllers');
        inject(function (_$rootScope_, $controller)
        {
            $scope = _$rootScope_.$new();
            controller = $controller('ProductCtrl', {$scope: $scope})
        });
    });

    it("should set the $scope.productList object when initialized", function ()
    {
        expect($scope.productList).toEqual([
            {name: 'Juice', price: 4, count: 5, image: 'assets/5.png'},
            {name: 'Yogurt', price: 2, count: 3, image: 'assets/1.png'},
            {name: 'Butter', price: 3, count: 3, image: 'assets/4.png'},
            {name: 'Chocolate', price: 5, count: 1, image: 'assets/3.png'}
        ]);
    });

    it("should instantiate the $scope.cart to empty array", function ()
    {
        expect($scope.cart).toEqual([]);

    });

    it("should instantiate the $scope.totalPrize to 0", function ()
    {
        expect($scope.totalPrice).toEqual(0);

    });

    describe("calculateCosts", function ()
    {
        beforeEach(function ()
        {
            $scope.totalPrice = 12;
        });

        it("should add price to the $scope.totalPrice when price is positive", function ()
        {
            $scope.addPrice(4);
            expect($scope.totalPrice).toEqual(16);

        });

        it("should subtract price from the $scope.totalPrice when price is negative", function ()
        {
            $scope.subtractPrice(4);
            expect($scope.totalPrice).toEqual(8);
        });
    });

});