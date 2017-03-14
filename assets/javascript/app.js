// Initialize Firebase
var config = {
	apiKey: "AIzaSyAk5KDZ9jcAwx20-kcld_FTa_mmgl4vfUM",
	authDomain: "train-scheduler-d5381.firebaseapp.com",
	databaseURL: "https://train-scheduler-d5381.firebaseio.com",
	storageBucket: "train-scheduler-d5381.appspot.com",
	messagingSenderId: "110482573862"
};

firebase.initializeApp(config);

// A variable to reference the database.
var database = firebase.database();

// Make sure that your app suits this basic spec:
	// When adding trains, administrators should be able to submit the following:
		// Train Name
		// Destination 
		// First Train Time -- in military time
		// Frequency -- in minutes

	// Code this app to calculate when the next train will arrive; this should be relative to the current time.
	// Users from many different machines must be able to view same train times.
	// Styling and theme are completely up to you. Get Creative!


// When user hit submit values of Train Name, Destination, First Train Time in Military Time and Frequency are entered into the database 

	

// Get the current time 
// Set arrival times relative to current time 



