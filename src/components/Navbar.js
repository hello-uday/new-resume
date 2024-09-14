import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles/Media';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <div style={{display:'inline-flex'}}>
      <NavbarName>
        <h2>
          Uday <span style={{ color: '#5AB2FF' }}>Pratap Singh</span>
        </h2>
      </NavbarName>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      </div>
      <NavbarCompo isOpen={isOpen}>
        <h3 onClick={() => handleClick('/')}>Home</h3>
        <h3 onClick={() => handleClick('/About')}>About</h3>
        <h3 onClick={() => handleClick('/certificates')}>Certificates</h3>
        <h3 onClick={() => handleClick('/education')}>Education</h3>
        <h3 onClick={() => handleClick('/contact')}>Contact</h3>
      </NavbarCompo>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 25px 0px 25px;
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavbarName = styled.div`
  padding-left: 10px;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;

  span {
    background-color: black;
    height: 3px;
    width: 100%;
  }

  @media ${device.tablet} {
    display: flex;
    margin-top:3vh;
    margin-left:15vh;
  }
`;

const NavbarCompo = styled.div`
  display: flex;
  cursor:pointer;
  gap: 50px;
  padding-right: 80px;
  

  @media ${device.tablet} {
    flex-direction: column;
    gap: 20px;
    padding-right: 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

  @media ${device.mobileL} {
    gap: 10px;
  }
`;

export default Navbar;
