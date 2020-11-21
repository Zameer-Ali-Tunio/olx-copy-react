import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Slider from '../components/carousel'
import NavD from '../components/nav';
import {Footer,FooterApp} from '../components/footer';
import Content from '../components/content';
// import CreateAdd from './createadd';
// import History from '../config/history'
class Home extends react.Component {

  render(){
  //   console.log(".......",this.props)
  // console.log(this.props)  
  return (
    <div>
      <NavBar/>
      <NavD />
      <Slider/>
      <Content/>
      <FooterApp/>
      <Footer/>
    </div>    
  );
}
}       

export default Home;
