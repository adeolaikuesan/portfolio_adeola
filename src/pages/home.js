import indexImage from '../images/AdeolaPromo2.jpg';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaSpotify} from "react-icons/fa";
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {
  return (
    
    <div>
        <div className='section'>
         <img src = {indexImage} alt = "Adeola standing, picture taken by Liisa Hietanen."  />
        </div>
        <div className='section'>
         <h1>Adeola <br></br> Ikuesan</h1>
            <p className = "homeDescription" >Musician and software developer</p>
            <div className='icons'>
                    <a href="mailto: adeola.ikuesan@gmail.com">
                    <FaEnvelope className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adeola-ikuesan-227b89ab/" target="_blank">
                    <FaLinkedinIn className="icon"/>
                    </a>
                    <a href="https://github.com/adeolaikuesan" target="_blank">
                    <FaGithub className="icon"/>
                    </a>
            </div>
        </div>
    </div>
  );
}

export default Home;
