import React from 'react';
import kaviProfile from 'assets/images/kaviProfile.jpg';
import { AboutMeShopNavLink } from 'components/atoms/AboutMeShopNavLink';
import RoundImage from 'components/atoms/RoundImage';
import styled from 'styled-components';
import { MainHeading, PostscriptHeading } from 'utils/Headers';

const GrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

const Greet = () => {
  return (
    <>
      <GrWrapper>
        <RoundImage img={kaviProfile} />
        <MainHeading>Cześć! Jestem Kavi,</MainHeading>
        <PostscriptHeading>trener skutecznej zmiany i bloger</PostscriptHeading>
        <AboutMeShopNavLink to="/shop" />
      </GrWrapper>
    </>
  );
};

export default Greet;
