##Exercise 4 : Defining a method on the scope

The goal of this exercise is use the method defined at **$scope** for replacing a given word in the text with new ones.

###Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)


###Exercise
* Connect  **textarea** model value with songs lyrics placed in **mySong.factory** (**song** attribute)
* In **NewWordCtrl** create a function called ***replaceWord()*** to change the words on the new ones. This method takes in three arguments:
  * text from **textarea**,
  * word, which will be replaced,
  * new word
  
* Replacement of the word can be achieved, for example, like this: 
*``` textIn.split(oldWord).join(newWord) ```* 
* Just like in the first step, connect the text input to a sample new word in mySong.factory (**newWord**)
* In header below use previously created replaceWord function (with appropriate arguments to replace the word ***purr*** for new one) to display refactored text 
*```<div class="well" ng-controller="NewWordCtrl">
      <h3></h3>
   </div>```*

###Completion

To complete this exercise You should be able to replace **purr** text fragment in the textarea with a word specified in text input below. You are supposed to display
refactored text inside first h3 element(you should see it at the top of the page). Text should be updated as the input values change.


Good luck!
