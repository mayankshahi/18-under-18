
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
    console.log(room_name);

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
            
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         console.log(message);
         console.log("test");
         like = message_data['like'];
         row = "<h4>"+ name +"<img src='tick.png' class = 'user_tick'></h4><h4 class = 'message_h4'>"+message+"</h4><button class = 'btn btn-warning' id='"+firebase_message_id+"' value = '"+like+"' onclick='updateLike(this.id)'><span class = 'glyphicon glyphicon-thumbs-up'>"+"Likes : "+like+"</span></button><hr>";
         document.getElementById("output").innerHTML += row;
      } });  }); }

getData();

function send()
{
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
        name:username,
        message:msg,
        like:0    
      });
      document.getElementById("msg").value = " ";
}

getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number)
            
       firebase.database().ref(room_name).child(message_id).update({
             like : likes_in_number
       });
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room-name");
      window.location = "index.html";
}