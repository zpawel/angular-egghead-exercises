describe("CalculatorCtrl", function ()
{
    var $scope;
    var controller;
    beforeEach(module("app"));
    beforeEach(inject(function ($controller, $rootScope)
    {
        $scope = $rootScope.$new();
        controller = $controller('CalculatorCtrl', {$scope: $scope});
    }));


    <!-- create matchers-->

    describe("addition", function ()
    {
        it("should be 2 + 6 even number.", function ()
        {
            controller.addition(2, 6);
            expect(controller.result).isEvenNumber();
        });

        it("should be 3 + 6 odd number.", function ()
        {
            controller.addition(3, 6);
            expect(controller.result).isOddNumber();
        });


        it("should be 5 + 6 greater than 10", function ()
        {
            controller.addition(5, 6);
            expect(controller.result).isGreaterThanTen();
        });

    });

});
