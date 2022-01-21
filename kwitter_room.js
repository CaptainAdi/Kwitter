//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCfYD-xbu2ufHyOUL04mCes7e96pCVgt1Q",
      authDomain: "kwitter-88f19.firebaseapp.com",
      databaseURL: "https://kwitter-88f19-default-rtdb.firebaseio.com",
      projectId: "kwitter-88f19",
      storageBucket: "kwitter-88f19.appspot.com",
      messagingSenderId: "526488735939",
      appId: "1:526488735939:web:1897090e90bb65bbd9d276"
};
username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Add_room() {
      roomname = document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({
            Purpose: "Adding roomnames"

      })
      localStorage.setItem("Room_name", roomname)
      window.location = "Kwitter_page.html"
}

function Add_User() {
      user_name = localStorage.getItem("user_name")
      firebase.database().ref("/").child(user_name).update({
            age: "12"
      })
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("Room_name", name)
      window.location = "kwitter_page.html"
}

function log_out() {
      localStorage.removeItem("Room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html"
}