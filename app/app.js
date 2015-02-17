var app = angular.module("app", ['ui.router']);

app.factory("paintingList", function ()
{
    return [
        {id: 1, title: 'Mona Lisa', author: 'Leonardo da Vinci', location: 'Louvre', date: '1503–1517', url: '/assets/mona.jpg', frame: 'v'},
        {id: 2, title: 'The Last Supper', author: 'Leonardo da Vinci', location: 'Santa Maria delle Grazie', date: '1495–1498', url: '/assets/last.jpg', frame: 'h'},
        {id: 3, title: 'The Creation of Adam', author: 'Michelangelo', location: 'Sistine Chapel', date: '1512', url: '/assets/adam.jpg', frame: 'h'},
        {id: 4, title: 'The Scream', author: 'Edvard Munch', location: ' National Gallery', date: '1893–1893', url: '/assets/scream.jpg', frame: 'v'},
        {id: 5, title: 'Girl with a Pearl Earring', author: 'Jan Vermeer', location: 'Mauritshuis', date: '1665', url: '/assets/pearl.jpg', frame: 'v'}
    ];
});
