angular.module('shoes-views.women', ['ui.router']).config(function ($stateProvider)
{
    <!-- add women state-->

    $stateProvider.state('app.women.flats', {
        url: '/flats',
        views: {

            'subcontent@app.women': {
                templateUrl: 'women/subpage/women.flats.html'

            }
        }
    });

    $stateProvider.state('app.women.pumps', {
        url: '/pumps',
        views: {

            'subcontent@app.women': {
                templateUrl: 'women/subpage/women.pumps.html'

            }
        }
    });
}).controller('womenCtrl', function ($scope)
{
    $scope.womenFlatsList = [
        {name: 'Born Saffi', image: 'assets/women/flats/1.jpg', price: '388'},
        {name: 'Born Tiffney', image: 'assets/women/flats/2.jpg', price: '388'},
        {name: 'Gerry Weber Bella', image: 'assets/women/flats/3.jpg', price: '693'}
    ];

    $scope.womenPumpsList = [
        {name: 'Clarks Florine', image: 'assets/women/pumps/1.jpg', price: '888'},
        {name: 'Johnathan Kayne Benjamin', image: 'assets/women/pumps/2.jpg', price: '432'},
        {name: 'Nine West Kismet Black', image: 'assets/women/pumps/3.jpg', price: '693'}
    ];
});