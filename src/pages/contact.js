import React, { useState } from 'react';
import ContactImage from '../images/viktoria-kontakt.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="content-container">
      <div className="contact-text">
        <h1>Kontakt</h1>
        <p>Ta gärna kontakt med mig här vid frågor och funderingar</p>
        <p>eller om du bara vill säga hej!</p>
      </div>
      <div className="contact-container">
        <img
          className="contact-image"
          src={ContactImage}
          alt="Viktoria Wallström"
        />
        <form className="form-container">
          <label for="name">*Namn:</label>
          <input type="text" placeholder="Namn..." id="name" name="name" />

          <label for="email">*Epost:</label>
          <input type="email" placeholder="Epost..." id="email" name="email" />

          <label for="number">*Telefon:</label>
          <input
            type="number"
            placeholder="Telefon..."
            id="number"
            name="number"
          />

          <label for="message">*Meddelande:</label>
          <textarea
            id="message"
            placeholder="Skriv här..."
            name="message"
            maxlength="250"
          ></textarea>
          <p id="word-count-message">Max 250 tecken.</p>
          <div class="row">
            <input type="reset" value="Rensa" />
            <input type="submit" value="Skicka" />
          </div>
          <p>* Obligatoriska fält</p>
        </form>
      </div>
    </div>
  );
}
