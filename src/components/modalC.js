import {Carousel} from 'react-bootstrap';
import Slide1 from '../images/bajo.webp';
import Slide2 from '../images/dil.webp';
import Slide3 from '../images/pp.webp';

export default function MdalC(){
    return(
        <Carousel>
          <Carousel.Item className="border">
            <center><img className="d-block w-50 " src={Slide1} alt="First slide"/>Help make OLX safer place to Buy and Sell </center>
          </Carousel.Item>
          <Carousel.Item  className="border">
            <center><img className="d-block w-50" src={Slide2} alt="Second slide"/>Contact and close deals faster</center>
          </Carousel.Item>
          <Carousel.Item className="border">
            <center><img className="d-block w-50" src={Slide3} alt="Third slide"/>Save all your favourite items in one place </center>
          </Carousel.Item>
      </Carousel>
    )
}