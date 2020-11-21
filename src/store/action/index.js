import firebase from '../../config/firebase';
import Home from '../../App';
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
          // window.location('../../App.jsx')
        })
      })
    .catch(function(error) {
        var errorMessage = error.message;
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
        // history.push('/home')
        // window.location=`${<Home/>}`

      })

    })
  .catch(function(error) {
      var errorMessage = error.message;
      console.log("err",errorMessage)
    });
    }
}
// Google login  end

const get_users=()=>{
  return(dispatch)=>{
    let users=[];
    firebase.database().ref('/').child('users').on('child_added',(data)=>{
      users.push(data.val())
    })
    dispatch({type:"SetFirebaseUsers",name:users})
  }
}
function getData() {
  return new Promise((resolve, reject) => {
      firebase
      .firestore()
      .collection("adds")
      .onSnapshot((snapshot) => {
        let array = [];
        snapshot.docChanges().forEach((change) => {
          array.push(change.doc.data());
        });
        resolve(array);
    });
  });
}


export {
    fb_login,
    google_login,
    get_users, 
    getData,  
}