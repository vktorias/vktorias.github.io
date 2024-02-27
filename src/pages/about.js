import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="content-container">
      <section className="aboutme-container">
        <div className="about">
          <h3>Hej!</h3>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Inventore, rem. Asperiores modi vel illo laborum, error ad <br />
            labore voluptas a pariatur dolor esse architecto. Voluptatum
            <br />
            ex magni quod fugit atque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. <br />
            Alias laboriosam quibusdam odit! Neque, dolor <br />
            dolorum ipsam natus veniam, officia ipsa nemo facere adipisci sint
            aperiam! <br />
            Ab est harum consequuntur obcaecati!
            <br />
            <br />
          </p>

          <Link to="/contact" className="contact-button">
            Kontakta mig
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
