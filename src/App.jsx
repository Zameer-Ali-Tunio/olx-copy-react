import react from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/home';
import CreateAdd from './containers/createadd';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
class App extends react.Component {
  render(){
  return (
    <div> 
      <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/createadd' component={CreateAdd}/>
      </Router>
      
    </div>
  );
}
}

 export default App;
