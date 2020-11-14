import {Carousel} from 'react-bootstrap';
import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpg';
import Slide3 from '../images/slide3.jpg';

export default function Slider(){
    return(
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide2} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide3} alt="Third slide"/>
          </Carousel.Item>
      </Carousel>
    )
}