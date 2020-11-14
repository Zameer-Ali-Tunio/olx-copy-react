import react from 'react';
import './App.css';
// import {connect} from 'react-redux';
// import {set} from './store/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/home'
class App extends react.Component {
  render(){
  return (
    <div> 
      <Home />
    </div>
  );
}
}

 export default App;
