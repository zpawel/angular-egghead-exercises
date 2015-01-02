##Exercise 4 : Defining a method on the scope

The goal of this exercise is use the method defined at **$scope** for replacing a given word in the text with new ones.

###Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)


###Exercise
* Use **ng-model** directive  to connect  **textarea** with songs lyrics placed in **mySong.factory** (**song** attribute)
* Create in **NewWordCtrl**, function called **replaceWord()** to change the words on the new ones. This method takes three arguments:
  * text from **textarea**,
  * word, which will be replaced,
  * new word
  
* Replacement of the word can be achieved, for example, like this: 
``` textIn.split(oldWord).join(newWord) ``` 
* Just like in first step, connect the text input with id word to a sample new word in mySong.factory (**newWord**)
* In header below use previously created replaceWord function (with appropriate arguments to replace the word **purr** for new one) to display refactored text ```<div class="well" ng-controller="NewWordCtrl"><h3></h3></div>```

Good luck!
