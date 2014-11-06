##Exercise 2 : Controller

Celem ćwicznia jest wykorzystanie kontrolera **FruitCtrl** do połączenia danych z polami teksowymi a następnie ich wyswietlenia 

###Zanim zaczniesz, zapoznaj się z:
* [angularjs-controller](https://egghead.io/lessons/angularjs-controller)

###Ćwiczenie

1. Utwórz nowy plik ```FruitCtrl.js```
2. Wewnątrz ```FruitCtrl.js``` utwórz funkcję ```FruitCtrl``` przyjmującą jako argument ```$scope``` 
3. W kontrolerze umieść obiekt ```fruit``` o atrybutach ```seller, name, count``` i zainicjalizuj je (np. wartościami ```seller: John Seller, name: "Apple", count: 5```)
4. W pliku ```index.html``` dodaj ```<script src="FruitCtrl.js"></script>```
5. W tagu ```<div class = "container">``` dodaj kontroler ```FruitCtrl```
5. Wykorzystaj dyrektywę ```ng-model``` do połączenia inputów z danymi umieszonymi w kontrolerze.
6. Uaktualnij ```seller, name, count ```znajdujące się wewnątrz ```<div class="well"``` tak aby wyświetlały się dane z kontrolera

Powodzenia!
