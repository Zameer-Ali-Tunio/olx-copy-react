import react from 'react';
import { connect } from 'react-redux';
import {fb_login} from '../store/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Slider from '../components/carousel'
import Nav from '../components/nav';
// import SpringModal from '../components/login_modal'

class Home extends react.Component {
  render(){
  return (
    <div>
       <NavBar/>
      <Nav/>
      <Slider/>
    </div>    
  );
}
}
const mapStateToProps=(state)=>({
    user:state.users
})
const mapDispatchToProp=(dispatch)=>({
    fb_login:(data)=> dispatch(fb_login(data)),
  })
export default connect(mapStateToProps,mapDispatchToProp)(Home);
