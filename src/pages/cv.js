import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faBirthdayCake,
  faIdCard,
  faStar,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import cvData from '../pages/cv_data.json';
import cvImage from '../images/viktoria-cv.jpg';

function Cv() {
  const readJsonFile = (datatyp, data) => {
    if (datatyp === 'utbildning') {
      return data.map((utbildning, index) => (
        <li key={index}>
          <span className="name">{utbildning.namn}</span>
          <br />
          <span className="school">{utbildning.skola}</span>
          <br />
          <span className="period">{utbildning.period}</span>
          <br />
        </li>
      ));
    } else if (datatyp === 'arbete') {
      return data.map((experience, index) => (
        <li key={index}>
          <span className="name">{experience.arbetsplats}</span>
          <br />
          <span className="period">{experience.period}</span>
        </li>
      ));
    }
  };

  return (
    <div className="content-container">
      <div className="info-container">
        <img className="cv-img" src={cvImage} alt="Viktoria Wallström" />
        <div className="info-list-container">
          <div className="info-list">
            <h3>Personligt</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 070-394 79 90
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Finnsta 637, 841 73
              Fränsta
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              viktoria-wallstrom@hotmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faBirthdayCake} /> 21 januari 1995
            </p>
            <p>
              <FontAwesomeIcon icon={faIdCard} /> B-körkort
            </p>
          </div>
          <ul className="interest-list">
            <h3>Intressen</h3>
            <li>Träning (Gym)</li>
            <li>Fiske</li>
          </ul>
          <section className="skill-list">
            <h3>Språk kunskaper</h3>
            <div className="row">
              <p>Svenska</p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="row">
              <p>Engelska</p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </section>
        </div>
      </div>
      <section className="educations">
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Utbildningar
        </h2>
        <ul className="education">
          {readJsonFile('utbildning', cvData.utbildningar)}
        </ul>
      </section>
      <section className="experiences">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} /> Arbetslivserfarenheter
        </h2>
        <ul className="experience">
          {readJsonFile('arbete', cvData.arbetslivserfarenheter)}
        </ul>
      </section>
    </div>
  );
}

export default Cv;
