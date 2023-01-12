import indexImage from "../images/AdeolaPromo2.jpg";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaSpotify,
} from "react-icons/fa";
// import "../App.css";

function Home() {
  return (
    <div className="hero-wrapper">
      <div className="section-1">
        {/* <img
          src={indexImage}
          alt="Adeola standing, picture taken by Liisa Hietanen."
        /> */}
      </div>
      <div className="section-2">
        <div className="wrapper">
          <h1>
            Adeola <br /> Ikuesan
          </h1>
          <p className="homeDescription">
            Musician and software developer
          </p>
          <div className="icons">
            <a href="mailto: adeola.ikuesan@gmail.com">
              <FaEnvelope className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/adeola-ikuesan-227b89ab/"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a
              href="https://github.com/adeolaikuesan"
              target="_blank"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
