const FirebaseConfig = {
      apiKey: "AIzaSyBV5utv_UEMAYjR6LdKEjR9c89Y1qdsFlk",
      authDomain: "kwitter-272d2.firebaseapp.com",
      databaseURL: "https://kwitter-272d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-272d2",
      storageBucket: "kwitter-272d2.appspot.com",
      messagingSenderId: "148225850329",
      appId: "1:148225850329:web:2c73e40f0ee562d30a77c8"
    };

firebase.initializeApp(FirebaseConfig)
room_name=localStorage.getItem("room name")
user_name=localStorage.getItem("username")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log( firebase_message_id)
console.log(message_data)
name1=message_data["name"]
message=message_data["message"]
like=message_data["like"]
namewithtag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room name")
      window.location="index.html"
}
function send(){
      message=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            like:0,message:message,name:user_name
      })
      document.getElementById("message").value=""
}
function updatelike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value
      updated_likes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}