import React from 'react';
import educate from '../assets/educate.png';
import styled from 'styled-components';
import { device } from '../styles/Media';

const Education = () => {
  return (
    <StyledEducation>
      <Heading><u>Education</u></Heading>
      <Content>
        <ImageContainer>
          <StyledImage src={educate} alt="loading" />
        </ImageContainer>
        <Details>
          <SchoolHeading>COLLEGE/SCHOOL</SchoolHeading>
          <ul>
            <ListItem>
              <SchoolName>Chandigarh University</SchoolName>
              <Date>May 2021 - Present</Date>
              <Description>Bachelor of Engineering 8.29 CGPA</Description>
            </ListItem>
            <ListItem>
              <SchoolName>Lucknow Public School & College</SchoolName>
              <Date>Mar 2020 - Apr 2021</Date>
              <Description>Intermediate 91.6%</Description>
            </ListItem>
            <ListItem>
              <SchoolName>Lucknow Public School & College</SchoolName>
              <Date>Mar 2018 - Apr 2019</Date>
              <Description>Matriculation 94.67%</Description>
            </ListItem>
          </ul>
        </Details>
      </Content>
    </StyledEducation>
  );
};

const StyledEducation = styled.div`
  background-color: #FEFAF6;
  background-size:cover;
  margin-top: -25px;
  padding: 0 10vh 15.5vh 10vh;

  @media ${device.tablet} {
    padding: 0 2vh 1vh 2vh;
  }

  @media ${device.mobileL} {
    padding: 0 2vh 1vh 2vh;
  }
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

const Content = styled.div`
  display: inline-flex;
  padding-left: 25vh;
  gap: 20vh;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    gap: 5vh;
    font-size:2.03vh;
  }

  @media ${device.mobileL} {
    gap: 2vh;
    font-size:2vh;
  }
`;

const ImageContainer = styled.div`
  @media ${device.tablet} {
    text-align: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 70%;
  }
`;

const Details = styled.div`
  @media ${device.tablet} {
    text-align: center;
  }
`;

const SchoolHeading = styled.h2`
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const SchoolName = styled.h3`
  color: red;
`;

const Date = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Description = styled.div`
  margin-top: 5px;
`;

export default Education;
