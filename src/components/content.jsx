// // import "../Home/style.css";
// import firebase from "../config/firebase";
// import React from "react";

// export default class Home extends React.Component {
//   state = {
//     adds: [],
//   };

//   componentDidMount = () => {
//     this.getData();
//   };

//   getData = async () => {
//     let uid = await localStorage.getItem("uid");
//     let arr = [];
//     firebase.collection("adds")
//       .where("uid", "==", uid)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           arr.push({ id: doc.id, data: doc.data() });
//         });
//         this.setState({ adds: arr });
//       })
//       .catch((error) => console.log(error));
//   };

//   deleteAdd = (id) => {
//     firebase.collection("adds")
//       .doc(id)
//       .delete()
//       .then(() => console.log("Document successfully deleted!"))
//       .catch((error) => console.error(error));
//   };

//   render() {
//     return (
//       <div>
        
//         <div className="postsView">
//           {this.state.adds.map((item, index) => {
//             console.log("Home -> render -> item", item);
//             return (
//               <div className="addscontainer">
//                 <img src={item.url} width="200px" />
//                 <h3>Title: {item.data.title}</h3>
//                 <h2>Rs. {item.data.price}</h2>
//                 <p>Detail: {item.data.disc}</p>
//                 <button onClick={() => this.deleteAdd(item.id)}>Delete</button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }











// import "./style.css";
import React from "react";
import firebase from "firebase";
import History from "../config/history";
import { getData } from "../store/action";
import { Button, Navbar, FormControl, Nav, Form } from "react-bootstrap";

export default class Home extends React.Component {
  state = {
    adds: [],
  };

  componentDidMount = () => {
    getData().then((adds) => {
      this.setState({ adds });
    });

    firebase
      .firestore()
      .collection("notification")
      .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
              new Notification(change.doc.data().name);
            }
          });
        });
      });
  };

  logout() {
    localStorage.removeItem("uid");
    History.push("/Login");
  }

  render() {
    return (
      <div>
        
        <div className="postsView">
          {this.state.adds.map((item, index) => {
            return (
              <div className="addscontainer">
                <img src={item.url} width="200px" />
                <h5>Title: {item.title}</h5>
                <p>Rs. {item.price}</p>
                <p style={{ overflow: "hidden", height: "25px" }}>
                  Detail: {item.disc}
                </p>
                <Button color="info">info</Button>{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
