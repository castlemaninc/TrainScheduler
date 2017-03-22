# HW - TrainScheduler

## Live Link 
 - https://castlemaninc.github.io/TrainScheduler/

## Description on how to use the app

1. Create and add a new train, by typing its name, destination, the first train time, and the frequency 
2. Hit submit

## Requirements

Build and style an train scheduling application using Firebase and a CSS framework

Website users should be able to submit the following:
-Train Name
-Destination 
-First Train Time -- in military time
-Frequency -- in minutes

-Code the app to calculate when the next train will arrive; it should be relative to the current time.
-Users from many different machines must be able to view same train times.


## Technologies Used
- Firebase
- Moment.js 
- Bootstrap
- Jquery

## Code Explanation

1. Firebase database is initialized 
2. An event listener waits for a click on the submit button 
	Values are taken from input fields and assigned to variables 
	A new train object is created 
	The object is pushed up to Firebase 
	Input fields are cleared 
3. An event listener listens for a new child object to be pushed to the database 
	The values of the object in Firebase are assigned to variables 
	User inputs for First Train Time is used along with Moment.js to get the user's current time,
	and calcuate the next train arrival and minutes away. 
4. Firebase data and time calculations populate the correct areas within a HTML table 
-------------

