import React from 'react';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import styled from 'styled-components';
import { device } from '../styles/Media';

const Certificates = () => {
  return (
    <StyledCertificates>
      <Heading><u>Certificates</u></Heading>
      <Grid>
        <StyledImage src={c1} alt="" />
        <StyledImage src={c2} alt="" />
        <StyledImage src={c3} alt="" />
        <StyledImage src={c4} alt="" />
      </Grid>
    </StyledCertificates>
  );
};

const StyledCertificates = styled.div`
  background-color: #FEFAF6;
  margin-top: -25px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 50px;

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }
`;

const Grid = styled.div`
  padding-left: 150px;
  display: grid;
  grid-template-columns: repeat(2, 100vh);
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
    padding-left: 100px;
    grid-template-columns: repeat(2, 50vh);
  }

  @media ${device.tablet} {
    padding: 0vh 5vh 5vh 5vh;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media ${device.mobileL} {
    padding-left: 20px;
  }
`;

const StyledImage = styled.img`
  width: 70%;
  height: auto;
  border: 5px solid;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default Certificates;
