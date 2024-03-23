// HomePage.js
import React from 'react';
import { MainContainer, AuthContainer, StyledHeading, StyledImage } from './HomePage.css';
import HomeButton from '../../Component/Button/HomeButton';
const HomePage = () => {
  const buttonDataTop = [
    { endpoint: '/home', text: 'Home' },
    { endpoint: '/download', text: 'Download' },
    { endpoint: '/admin', text: 'Admin Portal' },
  ];
  const buttonDataBottom = [
    { endpoint: '/user-login', text: 'User Login' },
    { endpoint: '/doctor-login', text: 'Doctor Login' },
    { endpoint: '/staff-login', text: 'Staff Login' },
  ];

  return (
    <MainContainer>
      <AuthContainer>
        <StyledHeading>
          Welcome TO BRAHMA Portal
        </StyledHeading>
        <HomeButton buttons={buttonDataTop} />
        <StyledImage
          src="/assets/logo/ehrBg.jpg" 
          alt="AI"
        />
        <HomeButton buttons={buttonDataBottom} />
      </AuthContainer>
    </MainContainer>
  );
};

export default HomePage;