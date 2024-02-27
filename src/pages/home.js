import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="content-container">
      <div className="row">
        <div className="text-container">
          <h2>Välkommen till min sida!</h2>
          <h3>Studerar till systemutvecklare .NET med AI-kompetens</h3>
          <p>
            Här kan du lära känna mig mer, ta del av mitt CV och min portfolio!
          </p>
          <p>Kontakta mig gärna vid frågor eller funderingar.</p>
        </div>

        <div className="image-container">
          <img
            src={require('../images/viktoria.png')}
            alt="Bild på Viktoria Wallström"
          />
        </div>
      </div>
      <ul className="icons">
        <li className="facebook">
          <Link
            to="https://www.facebook.com/viktoria.wallstrom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
        <li className="linkedin">
          <Link
            to="https://www.linkedin.com/in/viktoria-wallstr%C3%B6m-210444183/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li className="instagram">
          <Link to="https://www.instagram.com/vktorias/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
