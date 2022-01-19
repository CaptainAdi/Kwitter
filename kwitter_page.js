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
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function Send() {
      msg=document.getElementById("send_message").value
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("send_message").value=""
}