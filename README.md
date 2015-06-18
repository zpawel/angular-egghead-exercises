##Exercise 4 : Defining a method on the scope

##Summary
In this application, you are supposed to replace **purr** text fragment in the textarea, with a word specified in text input below and display
refactored text inside h3 element(*display board*).

###Goals

* **NewWordCtrl** should contain a ***replaceWord()*** assigned to it's scope function
* **replaceWord()** function should take in three parameters: ***text, word and newWord***. It must replace **word** with a **newWord** in specified **text**
* the upper *display board*(inside *h3* tag) text value should be taken from the textarea below, refactored by a function **replaceWord()**, with a **word** 
parameter set to the value from *word input* and **newWord** set as *"purr"*
* textarea model should default to lyrics from **SongText** factory
* *display board* should be updated as values in textarea or input change


##Setup
You should have installed `npm`, `bower`, `grunt`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals

```
npm start
```

```
grunt test
```

To start unit test run

```
grunt karma
```

###Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)

Good luck!
