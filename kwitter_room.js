const firebaseConfig = {
      apiKey: "AIzaSyBV5utv_UEMAYjR6LdKEjR9c89Y1qdsFlk",
  authDomain: "kwitter-272d2.firebaseapp.com",
  databaseURL: "https://kwitter-272d2-default-rtdb.firebaseio.com",
  projectId: "kwitter-272d2",
  storageBucket: "kwitter-272d2.appspot.com",
  messagingSenderId: "148225850329",
  appId: "1:148225850329:web:2c73e40f0ee562d30a77c8"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig)

username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="welcome"+username+"!"



function addroom(){
      roomname =document.getElementById("room").value
      localStorage.setItem("room name",roomname)
      firebase.database().ref("/").child(roomname).set({
            purpose:"adding room name"
      })
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname' id="+Room_names+" onclick='redirecttomessagepage(this.id)'>"+"#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function redirecttomessagepage(name){
localStorage.setItem("room name",name)
window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room name")
      window.location="index.html"
}