angular.module('shoes-views.men', ['ui.router']).config(function ()
{
    <!-- add men state-->

}).controller('menCtrl', function ($scope)
{
    $scope.menShoesList = [
        {name: 'Clark Desert Beeswax', image: 'assets/men/1.jpg', price: '445'},
        {name: 'Clarks desert Truffle', image: 'assets/men/2.jpg', price: '517'},
        {name: 'Sperry Top Sider Gold', image: 'assets/men/3.jpg', price: '693'},
        {name: 'Ugg Australia Catton', image: 'assets/men/4.jpg', price: '793'}
    ];
});