/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import styled from 'styled-components';
import { MainHeading, PostscriptHeading } from 'utils/Headers';
import { media } from 'utils';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import ScrollTemplate from 'templates/ScrollTemplate';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import AboutMeBlock from 'components/molecules/AboutMeBlock/AboutMeBlock';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import topShop from 'assets/images/topShop.jpg';
import bottomShop from 'assets/images/bottomShop.jpg';
import Footer from 'components/organisms/Footer/Footer';

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

const createMarkup = () => {
  return {
    __html: `<div id="my-store-36587055"></div>
    <div>
    <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?36587055&data_platform=code&data_date=2020-09-10" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-36587055");</script>
    </div>
  `,
  };
};

class Shop extends Component {
  state = {};

  render() {
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
        </ScrollTemplate>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </>
    );
  }
}

export default Shop;
