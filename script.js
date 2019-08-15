firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "welcome user :" + email;
      }



    } else {
      // No user is signed in.

      document.getElementById("user_div").style.display="none";
      document.getElementById("login_div").style.display="block";
    }
  });

function login() {

    
       var userEmail = document.getElementById("emailType").value;
        var userPass = document.getElementById("passwordType").value;
   


firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("error : " + errorMessage);
    // ...
  });
} 

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}