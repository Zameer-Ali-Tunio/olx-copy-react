import "../assets/createadd.css";
import React from "react";
// import swal from "sweetalert";
import firebase from "firebase";
// import History from "../History";
import { Button, FormControl, Form } from "react-bootstrap";
import NavBar from '../components/NavBar'

// import NavBar from "../components/NavBar";
export default class CreateAdd extends React.Component {

  state = {
    disc: "",
    price: "",
    title: "",
    file: {},
    imageUrl: "",
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  
  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  handleDisc = (event) => {
    this.setState({ disc: event.target.value });
  };

  uploadImage = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  // postAdd = () => {
  //   let ref = firebase.storage().ref().child(`Images/${this.state.file.name}`).put(this.state.file)
  //   ref.on('state_changed',function (snapshot){}, function(error){},function(){
  //     ref.snapshot.ref.getDownloadURL().then(function(downloadURL){
  //       console.log("urll",downloadURL)
  //       let url={
  //         url:downloadURL
  //       }
  //       firebase.database().ref('/').child(`ImagesURL/`).push(url)

  //     })
  //   });
  //   firebase.database().ref().child(`ImagesURL/`).on('child_added',function(data){
  //     console.log('ajshdj',data)
  //   })
  //           // this.setState({
  //           //   imageUrl:downloadURL,
  //           // })
    

  //   console.log("sae",this.state)
  // };
  
  postAdd = () => {
    let uid = localStorage.getItem("uid");
    let imgRef = firebase.storage().ref(this.state.file.name);
    imgRef.put(this.state.file).then((snapshot) => {
      imgRef.getDownloadURL().then((url) => {
        firebase
          .firestore()
          .collection("adds")
          .add({
            disc: this.state.disc,
            title: this.state.title,
            price: this.state.price,
            url,
            uid,
          })
          .then(function (docRef) {
            History.push("/");
            // swal(
            //   "Your Add Is Live On Olx",
            //   "Hope Your Product Sell Soon",
            //   "success"
            // );
          })
          .catch((error) => alert(error));
      });
    });
  };

  
  render() {
  
    return (
      <div>
        <NavBar/>
        <div className="width">
          <h3 style={{fontSize:'24px',marginBottom:'18px'}}>Post Your Add</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Titile</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Enter Product Title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              onChange={this.handlePrice}
              placeholder="Product Price"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Discription</Form.Label>
            <Form.Control
              type="text"
              value={this.state.disc}
              onChange={this.handleDisc}
              placeholder="Product Discription"
            />
          </Form.Group>

          <input type="file" onChange={(event) => this.uploadImage(event)} />

          <br />
          <br />

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Enable Chatting" />
          </Form.Group>
          <Button variant="primary" onClick={this.postAdd} type="submit">
            Post
          </Button>
          
        </div>
      </div>
    );
  }
}
