/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import bottomShop from 'assets/images/bottomShop.jpg';
import topShop from 'assets/images/topShop.jpg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import ShopItem from 'components/atoms/ShopItem';
import AboutMeBlock from 'components/molecules/AboutMeBlock/AboutMeBlock';
import Footer from 'components/organisms/Footer/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { media } from 'utils';
import { MainHeading, PostscriptHeading } from 'utils/Headers';

const StyledTopBackground = styled(FixedBackgroundTop)`
  margin-bottom: 18rem;

  ${media.desktop`
    height: 60vh;
  `}

  :after {
    opacity: 0.9;
  }
`;

const StyledPostscriptHeading = styled(PostscriptHeading)`
  max-width: 80rem;
`;

const AboutMeBlockWrapper = styled.div`
  position: absolute;
  top: 270rem;
  right: 6rem;

  @media (min-width: 1300px) {
    right: 0;
    top: 97rem;
  }

  @media (min-width: 1600px) {
    right: 0;
    top: 67rem;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 250rem;
  background-position: 50% 50%;

  ${media.desktop`
     margin-top: 95rem;
  `}
`;

const StyledBottomBackground = styled(FixedBackgroundBottom)`
  height: 60vh;
`;

const Shop = () => {
  return (
    <>
      <ScrollTemplate>
        <Navigationbar />
        <StyledTopBackground img={topShop}>
          <MainHeading>Cześć!</MainHeading>
          <StyledPostscriptHeading>
            Zapraszam Cię do zapoznania się z ofertą przygotowanych dla Ciebie książek i szkoleń.
          </StyledPostscriptHeading>
        </StyledTopBackground>
        <AboutMeBlockWrapper>
          <AboutMeBlock />
        </AboutMeBlockWrapper>
        <BottomWrapper>
          <StyledBottomBackground img={bottomShop} />
          <Footer />
        </BottomWrapper>
        <ShopItem />
      </ScrollTemplate>
    </>
  );
};

export default Shop;
