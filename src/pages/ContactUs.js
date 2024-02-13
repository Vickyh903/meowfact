import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Simple regex for basic email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate all fields whenever any input changes
  const validateForm = () => {
    if (name.trim() !== "" && validateEmail(email) && message.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Update state and validate form on each input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill out the form correctly.');
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
      });

      alert('Message has been submitted');
    } catch (error) {
      alert(error.message);
    }

    setName("");
    setEmail("");
    setMessage("");
    setIsFormValid(false); // Reset form validity
  };

  return (
    <div className="contact-page">


      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title"> Contact Us </h1>

        <label className="form-text">Name</label>
        <input 
          className="form--input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />

        <label className="form-text">Email</label>
        <input 
          className="form--input"
          placeholder="Email" 
          value={email}
          onChange={handleEmailChange}
        />

        <label className="form-text">Message</label>
        <textarea 
          className="form--input"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}>
        </textarea>

        <button className="form-button" type="submit" disabled={!isFormValid}>Submit</button>
      </form>

      <div className="contact-image">
        <img src={`${process.env.PUBLIC_URL}/images/meow-contact.png`}/>
      </div>
      
    </div>
  );
}

export default ContactUs;
