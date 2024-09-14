import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import conta from '../assets/conta.jpg';
import styled from 'styled-components';
import { device } from '../styles/Media';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hszxk8p',
        'template_ni81omq',
        form.current,
        '6EmViL-vAMO2Swj43'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContact>
      <Heading><u>Contact</u></Heading>
      <Form ref={form} onSubmit={handleClick}>
        <StyledInput
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <StyledTextarea
          placeholder="Text Here..."
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
        <StyledButton type="submit" value="Send" />
      </Form>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  background-image: url(${conta});
  background-size: cover;
  background-position: center;
  padding: 10vh 0;
  font-size: 4vh;
  min-height: 73.5vh;
  margin-top: -25px;

  @media ${device.tablet} {
    font-size: 3vh;
  }

  @media ${device.mobileL} {
    font-size: 3vh;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 8vh;
  margin-bottom: 4vh;

  @media ${device.tablet} {
    font-size: 6vh;
  }

  @media ${device.mobileL} {
    font-size: 4vh;
  }
`;

const Form = styled.form`
  display: grid;
  justify-items: center;
  gap: 2vh;
  margin: 0 auto;
  max-width: 60vw;

  @media ${device.tablet} {
    max-width: 80vw;
  }

  @media ${device.mobileL} {
    max-width: 90vw;
  }
`;

const StyledInput = styled.input`
  width: 25%;
  padding: 2vh;
  border-radius: 1vh;
  border: 0.3vh solid green;
  font-size: 2vh;

  @media ${device.tablet} {
    height: 5vh;
    width: 30vh;
  }

  @media ${device.mobileL} {
    height: 5vh;
    width: 30vh;
  }
`;

const StyledTextarea = styled.textarea`
  width: 25%;
  padding: 2vh;
  border-radius: 1vh;
  border: 0.3vh solid green;
  resize: none;
  font-size: 2vh;
  @media ${device.tablet} {
    height: 5vh;
    width: 30vh;
  }

  @media ${device.mobileL} {
    height: 5vh;
    width: 30vh;
  }
`;

const StyledButton = styled.input`
  width: 10%;
  font-size: 3vh;
  cursor: pointer;
  border-radius: 2vh;
  padding: 1vh;
  border: 0.3vh solid green;
  background-color: white;
  @media ${device.tablet} {
    height: 8vh;
    width: 15vh;
  }

  @media ${device.mobileL} {
    height: 8vh;
    width: 15vh;
  }
`;

export default Contact;
