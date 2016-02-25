


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  //  FB.api("/{user-id}/picture, first_name", changeUser);
        // FB.api("/{friend-list-id}", addFriends);
     //   FB.api('/me/friends', addFriends);

    
  }
}

function changeUser(response){
  console.log("HERE");
  $(".facebookLogin").hide();
  console.log(response);
  $("#name").html(response.name)

$('#photo').attr('src', "https://scontent.xx.fbcdn.net/hprofile-prn2/v/t1.0-1/s480x480/540759_532067340165008_1152462856_n.jpg?oh=c9ebc36d61df7763e5c556c72c300e77&oe=57500DD7");
}

function addFriends(response){
      console.log("WE GOT IT");

  if (response && !response.error) {
    console.log(response);
    // print(response);
  }
  else{
    console.log("ERROR")
    // print("ERROR");
  }
}
