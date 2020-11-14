import {Nav,NavDropdown,render} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  SpringModal from '../components/login_modal'
export default function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
     
       
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="#">
         <NavDropdown title="All Categories" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" ><span className="font-weight-bold">Action</span></NavDropdown.Item>
          <ul style={{listStyle:"none",margin:0,textAlign:'left',}}>
            <li >khan je</li>
          </ul>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          </NavDropdown>
            </a>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="">MobilePhones </a>
              <a className="nav-item nav-link" href="">Cars</a>
              <a className="nav-item nav-link" href="">MotorCycles</a>
              <a className="nav-item nav-link" href="">Houses</a>
              <a className="nav-item nav-link" href="">TV-Video-Audio</a>
              <a className="nav-item nav-link" href="">Tablets</a>
              <a className="nav-item nav-link" href="">Land & Plots</a>
            </div>
          </div>

          <SpringModal />
          
        </nav>
    );
  }
  
// render(<NavDropdownExample />);