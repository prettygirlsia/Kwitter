var firebaseConfig = {
      apiKey: "AIzaSyBh-8Th2BkMrhwDuhbd4-0eowe6uRQj93c",
      authDomain: "kwitter-1b758.firebaseapp.com",
      databaseURL: "https://kwitter-1b758-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b758",
      storageBucket: "kwitter-1b758.appspot.com",
      messagingSenderId: "695060827114",
      appId: "1:695060827114:web:c22c5092c366e94d8dc093"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User Name");
            room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
            
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}