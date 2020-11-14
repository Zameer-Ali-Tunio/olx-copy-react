import firebase from '../../config/firebase';
// const set=(data)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"SetData",
//             data:data
//         })}
// }

// fb login start
const fb_login=(history)=>{
    return (dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // var token = result.credential.accessToken;
        var user = result.user;
        let create_user={
          name:user.displayName,
          email:user.email,
          profile:user.photoURL,
          uid:user.uid
        }
        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
        .then(()=>{
          dispatch({type:"SetUser",name:create_user})
          alert('successs')
          history.push('/home')
        })
        // console.log("user",create_user)
        // console.log("user=>.>>>>",user)
      })
    .catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        console.log("err",errorMessage)
      });
    }
}
// fb login end

// Google login  start
const google_login=(history)=>{
  return(dispatch)=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // var token = result.credential.accessToken;
      var user = result.user;
      let create_user={
        name:user.displayName,
        email:user.email,
        profile:user.photoURL,
        uid:user.uid
      }
      firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
      .then(()=>{
        dispatch({type:"SetUser",name:create_user})
        alert('successs')
        history.push('/home')
      })
      // console.log("user",create_user)
      // console.log("user=>.>>>>",user)
    })
  .catch(function(error) {
      // var errorCode = error.code;
      var errorMessage = error.message;
      // var email = error.email;
      // var credential = error.credential;
      console.log("err",errorMessage)
    });
    }
}
// Google login  end

// github login  start
const github_login=(history)=>{
    return(dispatch)=>{
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // var token = result.credential.accessToken;
    var user = result.user;
    let create_user={
      name:user.displayName,
      email:user.email,
      profile:user.photoURL,
      uid:user.uid
    }
    firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
    .then(()=>{
      dispatch({type:"SetUser",name:create_user})
      alert('successs')
      history.push('/home')
    })
    
  })
.catch(function(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    // var email = error.email;
    // var credential = error.credential;
    console.log("err",errorMessage)
  });
}
}
// github login end

export {
    fb_login,
    google_login,
    github_login,
}