##Exercise 4 : Defining a method on the scope

The goal of this exercise is use the method defined at **$scope** for replacing a given word in the text with new ones.

###Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)


###Exercise
1. Use **ng-model** directive  to connect  **textarea** with songs lyrics placed in **mySong.factory** (**song** attribute)
2. Create in **NewWordCtrl**, function called **replaceWord()** to change the words on the new ones. This method takes three arguments:
* text from **textarea**,
* word, which will be replaced,
* new word

3. Replacement of the word can be achieved, for example, like this: 
```
textIn.split(oldWord).join(newWord)
``` 
4. As in step 1, conntect the textbox with id **word** with the sample new word in **mySong.factory** (**newWord**)
5. Use ```replaceWord()``` (with appropriate arguments  to replece the word ```purr``` for new, given in the textbox) to displaying the amended text of the heading ```<h3>```

Good luck!
