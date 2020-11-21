import React ,{Component} from 'react'
import '../assets/footer.css';
import apppic from '../images/phone-app.webp'
import appStore from '../images/appstore.webp'
import playStore from '../images/playstore.webp'
import Icon from '@material-ui/core/Icon';
import {FaFacebook,FaTwitterSquare,FaInstagramSquare,FaYoutube} from 'react-icons/fa'

class  FooterApp extends Component{
    render(){
    return(
        <div>
            <div className=' container-fluid row'>
                <div className='col-12 col-lg-4'><img src={apppic} width='350px' /></div>
                <div className='col-12 col-lg-4 d-lg-block d-none pt-4'>
                    <span className='hh'>TRY THE OLX APP</span>
                    <p className='pp'>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div className='col-12 col-lg-4  border_left pt-lg-5'>
                    <p className='get'>GET YOUR APP TODAY</p>
                   <a href='https://play.google.com/store/apps' target='_blank' > <img src={appStore} width='145px' /></a>
                   <a href='https://www.apple.com/app-store/' target='_blank'> <img src={playStore} width='145px' /></a>
                </div>
            </div>
        </div>
    );
}
}
class  Footer extends Component{
    render(){
    return(
        <div className='bg'>

            <div className='row container-fluid '>
                <div className='col-12 col-lg-2'>
                        <h5 className="pl-3 h">Papular Categories</h5>
                    <ul className="f_links">
                        <li><a href='#'>Cars</a></li>
                        <li><a href='#'>Flat for rent</a></li>
                        <li><a href='#'>Jobs</a></li>
                        <li><a href='#'>Mobile Phones</a></li>
                    </ul>
                </div>
                <div className='col-12 col-lg-2'>
                <h5 className="pl-3 h">Trending Searshes</h5>
                    <ul className="f_links">
                        <li><a href='#'>Bike</a></li>
                        <li><a href='#'>Watches</a></li>
                        <li><a href='#'>Books</a></li>
                        <li><a href='#'>Dogs</a></li>
                    </ul>
                </div>
                <div className='col-12 col-lg-2'>
                <h5 className="pl-3 h">About Us</h5>
                    <ul className="f_links">
                        <li><a href='#'>About A2Z Group</a></li>
                        <li><a href='#'>A2Z Blog</a></li>
                        <li><a href='#'>Contacts Us</a></li>
                        <li><a href='#'>A2Z For Bussiness</a></li>
                    </ul>
                </div>
                <div className='col-12 col-lg-2'>
                <h5 className="pl-3 h">A2Z</h5>
                    <ul className="f_links">
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>Sitemap</a></li>
                        <li><a href='#'>Legals & Privacy</a></li>
                    </ul>
                </div>
                <div className='col-12 col-lg-4'>
                <h5 className="pl-3 h">Follow Us</h5>
                    <ul className="f_links_i">
                        <li><a href='#'><FaFacebook/></a></li>
                        <li><a href='#'><FaInstagramSquare/></a></li>
                        <li><a href='#'><FaTwitterSquare/></a></li>
                        <li><a href='#'><FaYoutube/></a></li>
                    </ul>
                    <a href='https://play.google.com/store/apps' target='_blank' > <img src={appStore} width='100px' /></a>
                   <a href='https://www.apple.com/app-store/' target='_blank'> <img src={playStore} width='100px' /></a>
                </div>
            </div>
            
        </div>
    );
}
}

export {
    Footer,
    FooterApp
}
