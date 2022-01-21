//YOUR FIREBASE LINKS
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
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name")
roomname = localStorage.getItem("Room_name")

function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(message_data)
                        //Start code
                        name1 = message_data['name']
                        message = message_data['message']
                        like = message_data['like']
                        name_with_tag = "<h4>    " + name1 + "<img class='user_tick' src='tick.png'>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatelike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag
                        document.getElementById("output").innerHTML += row
                        //End code
                  }

            });
      });
}
getData();

function updatelike(msg_id) {
      button_id = msg_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1
      firebase.database().ref(roomname).child(msg_id).update({
            like: updated_likes
      })
}

function Send() {
      msg = document.getElementById("send_message").value
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("send_message").value = ""
}

function log_out() {
      localStorage.removeItem("Room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html"
}