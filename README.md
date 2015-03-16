##Exercise 65: Using $resource for Data Models
This time, the application simulates the recruitment for swimming lessons. Your task will be implement functionality to add, edit or delete the participant.

###Requirements
* create ***Participant*** provider
    * using endpoint ```http://localhost:3000/api/participant/:_id```
    * with ***updateParticipant()*** method
* complete **ParticipantCtrl** with necessary dependencies
* create four functions responsible for responsible for adding, editing, deleting:
    * ***newParticipant()*** - create new participant
    * ***updateParticipant()*** - update participant data on $scope
    * ***saveParticipant()*** - add new participant or edit participant if exists
    * ***deleteParticipant()*** -remove selected participant
    * participants are storage in **participantList*** variable
     
###Result
    
  ![alt text](app/assets/1.jpg)

###Aplication start
* [install MongoDB](http://docs.mongodb.org/manual/installation/)
* ```npm install```
* ```bower install```
* you need three terminal windows:
    * in the first start mongoDB
    * in the second go to ```/server``` folder and run ```node serer.js```
    * in the second run ```grunt serve```
    

###Before you start:
* [angularjs-using-resource-for-data-models](https://egghead.io/lessons/angularjs-using-resource-for-data-models)

Good luck!
