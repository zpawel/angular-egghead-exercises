describe("CartCtrl", function ()
{
    var $scope, controller, juiceProduct, butterProduct, chocolateProduct;

    beforeEach(function ()
    {
        module('controllers');
        inject(function (_$rootScope_, $controller)
        {
            $scope = _$rootScope_.$new();
            chocolateProduct = {name: 'Chocolate', price: 5, count: 1, image: 'assets/3.png'};
            $scope.cart = [chocolateProduct];
            controller = $controller('CartCtrl', {$scope: $scope});
        });
        juiceProduct = {name: 'Juice', price: 4, count: 5, image: 'assets/5.png'};
        butterProduct = {name: 'Butter', price: 3, count: 3, image: 'assets/4.png'};

    });

    <!--complete test cases-->
    it("should add to $scope.cart juice", function ()
    {

    });

    it("should remove from $scope.cart chocolate", function ()
    {

    });

    it("should call updateProductList with product object when add is true", function ()
    {

    });

    it("should call updateProductList with product object when add is false", function ()
    {

    });


});