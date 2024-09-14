import React from 'react';
import abtimg from '../assets/abtimg.jpg';
import resume from '../assets/21BCS7439__UDAYPRATAPSINGH.pdf';
import styled from 'styled-components';
import { device } from '../styles/Media';
// import {Document,Page} from 'react-pdf'

const About = () => {

  const download = () => {

    // const [ pdfFile, setpdf] = useState(null);

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Uday_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const View = () =>{
  //   const pdfView = Window.open('')
  //   pdfView.window.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(pdfFile) + "'></iframe>");

  // }


  return (
    <StyledAbout>
      <Heading><u>About</u></Heading>
      <Container>
        <ImageContainer>
          <StyledImage src={abtimg} alt='loading' />
        </ImageContainer>
        <TextContainer>
          <Intro>Hi! I Am Uday,</Intro>
          <Description>
          Highly motivated and energetic individual with a strong enthusiasm for learning
          new skills and tackling diverse tasks on a daily basis. Possesses a creative mindset
          that is leveraged to develop innovative solutions to complex problems. Proven
          ability to handle multiple responsibilities effectively, demonstrating adaptability
          and a proactive approach in various professional environments. Aiming to
          contribute dynamic energy, creativity, and a versatile skill set to drive success in
          future endeavors.
          </Description>
          <DownloadCV onClick={download}>Download CV</DownloadCV>
          {/* <ViewCV onClick={View}>View CV
          {pdfFile &&  <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>}
          </ViewCV> */}
        </TextContainer>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  background-color: #FEFAF6;
  padding: 0 160px;
  margin-top: -3vh;

  @media ${device.laptopL} {
    padding: 0 80px;
  }

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.mobileL} {
    padding: 0 20px;
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

const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  height: 70vh;
  width: 70vh;

  @media ${device.tablet} {
    height: 40vh;
    width: 40vh;
  }

  @media ${device.mobileL} {
    height: 30vh;
    width: 30vh;
  }
`;

const TextContainer = styled.div``;

const Intro = styled.h2`
  font-size: 25px;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 20px;

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

const DownloadCV = styled.h2`
  display: inline-flex;
  border: 3px solid #40A578;
  padding: 5px;
  cursor: pointer;

  @media ${device.mobileL} {
    padding: 3px;
    font-size: 16px;
  }
`;

// const ViewCV = styled.h2`
//   display: inline-flex;
//   border: 3px solid #40A578;
//   padding: 5px;
//   cursor: pointer;
//   margin-left:15px;
//   @media ${device.mobileL} {
//     padding: 3px;
//     font-size: 16px;
//   }
// `;

export default About;
