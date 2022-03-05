
var firebaseConfig = {
      apiKey: "AIzaSyBh-8Th2BkMrhwDuhbd4-0eowe6uRQj93c",
      authDomain: "kwitter-1b758.firebaseapp.com",
      databaseURL: "https://kwitter-1b758-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b758",
      storageBucket: "kwitter-1b758.appspot.com",
      messagingSenderId: "695060827114",
      appId: "1:695060827114:web:c22c5092c366e94d8dc093"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
