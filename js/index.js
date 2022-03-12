var firebaseConfig = {
    apiKey: "AIzaSyAkTxMCWx4O2lJao-3nubNTRy6veagps6w",
    authDomain: "blogapp-afd15.firebaseapp.com",
    databaseURL: "https://blogapp-afd15-default-rtdb.firebaseio.com",
    projectId: "blogapp-afd15",
    storageBucket: "blogapp-afd15.appspot.com",
    messagingSenderId: "145070973766",
    appId: "1:145070973766:web:e38b5f5800059440757b47"
  };
   firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

 if(email!="" && password!="")
 {
var result=firebase.auth().signInWithEmailAndPassword(email,password);

result.catch(function(error){
    var errorCode=error.code;
    var errorMessage=error.mesage;
     console.log(errorCode)
     console.log(errorMessage)
    window.alert("MESSAAGE: "+errorMessage)
})
 }
 else{
     window.alert("FORM IS INCOMPLETE. PLEASE FILL OUT ALL FIELDS")
 }
  });



  $("#btn-signup").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();
      var cpassword = $("#confirmpassword").val();
 if(email!="" && password!="" && cpassword!="")
 {
if(password==cpassword){
    var result=firebase.auth().createUserWithEmailAndPassword(email,password);

result.catch(function(error){
    var errorCode=error.code;
    var errorMessage=error.mesage;
     console.log(errorCode)
     console.log(errorMessage)
    window.alert("MESSAGE: "+errorMessage)
});
}
else{
    window.alert("PASSWORD DOEN'T MATCH WITH CONFIRM PASSWORD")
}
 }
 else{
     window.alert("FORM IS INCOMPLETE. PLEASE FILL OUT ALL FIELDS")
 }
  });


  $("#btn-resetPassword").click(function()
  {
 var auth= firebase.auth();
 var email=$("#email").val();

 if(email!="")
 {
auth.sendPasswordResetEmail(email).then(function(){
    window.alert("EMAIL HAS BEEN SENT TO YOU.PLEASE CHECK AND VERIFY.")
})
.catch(function(error)
{
    
    var errorCode=error.code;
    var errorMessage=error.mesage;
     console.log(errorCode)
     console.log(errorMessage)
    window.alert("MESSAGE: "+errorMessage)
})
 }
 else{
    window.alert("PLEASE FILL YOUR EMAIL FIRST")
 }
  });


  $("#btn-logout").click(function()
  {
  firebase.auth().signOut();
  });



  $("#btn-update").click(function()
  {
      var phone = $("#number").val();
      var address = $("#text").val();
      var bio = $("#bio").val();
      var fname = $("#firstName").val();
      var lname = $("#lastName").val();
      var country = $("#country").val();
      var gender = $("#gender").val();



      var rootRef=firebase.database().ref().child("Users");
      var userId=firebase.auth().currentUser.uid;
      var userRef=rootRef.child(userId);
    
      if(fname!==""&& lname!=="" && phone!=="" && address!=="" && bio!=="" && country!=="" && gender!==""){
      var userData={
      "phone":phone,
      "address":address,
      "bio":bio,
      "firstname":fname,
      "lastname":lname,
      "country":country,
      "gender":gender
    };
    userRef.set(userData,function(error){
        if(error){
            var errorCode=error.code;
            var errorMessage=error.mesage;
            console.log(errorCode)
            console.log(errorMessage)
            window.alert("MESSAGE: "+errorMessage)
        }
        else{
           window.location.href="mainPage.html"
        }
    })
      }
      else{
        window.alert("FORM IS INCOMPLETE. PLEASE FILL OUT ALL FIELDS")
      }

    });


function switchView(view){
$.get({
    url:view,
    cache:false,

})
.then(function(data){
$("#container").html(data)
});
}