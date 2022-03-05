
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
    document.getElementById("User Name").innerHTML="Welcome "+user_name+"!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update
          ({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("all room names-"+Room_names);
      row="<div class='room_name' id="+Room_names+ " onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      });});}
getData();

function redirect_to_room_name(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("User Name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}