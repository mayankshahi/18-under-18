
  var firebaseConfig = {
      apiKey: "AIzaSyA6P86k70McvcR_Nw29EphxHCuwFNMlEYk",
      authDomain: "under-18-47c27.firebaseapp.com",
      databaseURL: "https://under-18-47c27-default-rtdb.firebaseio.com",
      projectId: "under-18-47c27",
      storageBucket: "under-18-47c27.appspot.com",
      messagingSenderId: "232960831386",
      appId: "1:232960831386:web:12c04d0e4ed79f5051d423"
    };
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
room_name = localStorage.getItem("room-name");
console.log(username);
document.getElementById("username").innerHTML = username;

function addroomname()
{
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name..."});

      localStorage.setItem("room-name",room_name);
      window.location ="kwitter_page.html";
}

function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
      {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room Name",Room_names);
       
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(names)
{
      console.log(names);
      localStorage.setItem("room-name",names);
      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("room-name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}