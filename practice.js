
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAxHPrNQzdk13yRFpFG5DwJ8NewTMaRie0",
    authDomain: "c-96-46bdb.firebaseapp.com",
    databaseURL: "https://c-96-46bdb-default-rtdb.firebaseio.com",
    projectId: "c-96-46bdb",
    storageBucket: "c-96-46bdb.appspot.com",
    messagingSenderId: "981251502656",
    appId: "1:981251502656:web:0c2f09cc6b654c77e4e5a5",
    measurementId: "G-FD3VX7VTRN"
  };
  
  
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })

  }
  function RedirectToRoomName (name) {

    console.log(name);
    localStorage.setitem("room_name", name);
    window.location =practice.html
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code


//End code
});});}
getData();



