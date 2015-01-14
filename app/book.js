var bookApp = angular.module("bookApp", []);

bookApp.controller("BookCtrl", function ($scope) {
    $scope.description = "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call" +
        " in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum," +
        " his body covered in baffling symbols. As Langdon and gifted French...";

});

bookApp.directive("bookTitle", function () {

    return{
        template: '<h4 class="page-header text-center"><strong></strong></h4>'
    }
});

<!--bookDescription directive-->

bookApp.directive("bookPages", function () {

    return{
        restrict: "E",
        scope: {
            number: "@"
        },
        template: '<span class="badge">{{number}} pages</span>'
    }
});

bookApp.directive("book", function () {

    return{
        restrict: "E",
        template: ' <div class="col-md-4 text-right">' +
            '<div class="panel panel-default" > ' +
            '<div class="panel-body">' +
            <!--add ng-transculde directive to div below-->
            '<div></div>' +
            '</div>' +
            '<div class="panel-footer text-left"><strong>Publisher: </strong></div></div></div>'
    }
});