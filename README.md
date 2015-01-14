##Exercise 6: Angular ng-repeat and filtering data

The goal of this exercise is the creation of simple filters.

###Before you start, please refer to:
* [angularjs-ngrepeat-and-filtering-data](https://egghead.io/lessons/angularjs-ngrepeat-and-filtering-data)
* [angular filter](https://docs.angularjs.org/api/ng/filter/filter)

###Exercise

1. In **Student.js**:
    * Create factory called ***Students***
    * Add ***list*** attribute to the **Students** and assign there the data contained in the **students.json** file.
    * Assign list of the students from previously created factory to ***students*** field in **StudentCtrl** (bind it to the **$scope**).
2. In **index.html**:
    * Use the **ng-repeat** directive to fill the table with data from the list (pay attention to the headlines).
    * Filter data from **ng-repeat** directive by values according to the input name, then modify all inputs that search by category in the table headers.
    * The upper input field should search through all categories.

###Completion

Expected result of this exercise is an application which allows user to search throught the **students.json** data by filtering specified field. For example
if You would write **Warner** in **First Name** input, ng-repeat should only show one record containing the data of **Warner Bridges**. Moreover, You should
be able to filter by multiple fields in the same time.

Good luck!
