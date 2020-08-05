import React from 'react';
import styled from 'styled-components';
import KaviBlue from 'assets/images/KaviBlue.jpg';
import ImageBox from 'components/atoms/ImageBox/ImageBox';
import BackgroundShape from 'components/atoms/BackgroundShape/BackgroundShape';

// Flex Wrapper for all TopSection elements. Main children: TopTextWrapper, TopImageBox and BlueShapeWrapper
const TopWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 30px 150px 30px 300px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: space-between;
  align-items: center;
`;

// Text
const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 0 0;
`;

const TopHeader = styled.h1`
  color: ${({ theme }) => theme.redText};
  font-size: 60px;
  margin: 0;
  text-shadow: 1px 1px 1px #c1c1c1;
`;

const TopParagraph = styled.p`
  color: ${({ theme }) => theme.navyblueText};
  font-size: 30px;
  padding-left: 50px;
`;

// Created to colored and weight a part of the text
const LogoBlack = styled.span`
  color: black;
  font-weight: 700;
`;

// Created to colored and weight a part of the text
const LogoRed = styled.span`
  color: ${({ theme }) => theme.redText};
  font-weight: 700;
`;

const TopImageBox = styled(ImageBox)`
  background-image: url(${KaviBlue});
`;

/* I've made a Wrapper which has the same properties as NvigationWrapper
in Navigationbar just to resolve the problem with the width of BackgroundShape.
Now till some point while resizing the browser (sets by media queries) width of 
BackgroundShape will be the same as width of NavLinksWrapper (with blue props) */
const BlueShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 1246px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

/* Text with visibility property of hidden. This text exist only to create the same conditions
to keep the width of the backgroun the same as NavLinksWrapper (blue) */
const InvisibleText = styled.p`
  color: ${({ theme }) => theme.navyblueText};
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-weight: normal;
  min-width: 100px;
  text-decoration: none;
  margin: 0px;
  text-align: center;
  white-space: nowrap;
  visibility: hidden;

  @media only screen and (min-width: 1200px) {
    padding: 0 30px;
  }

  &.active {
    font-weight: 700px;
  }
`;

const TopSection = () => (
  <>
    <TopWrapper>
      <BlueShapeWrapper>
        <BackgroundShape>
          {/* This part won't be visible at all. It's only for keeping the same width as NavLinksWrapper (blue) */}
          <InvisibleText>Konsultacje i Szkolenia</InvisibleText>
          <InvisibleText>Sklep</InvisibleText>
          <InvisibleText>Kontakt</InvisibleText>
        </BackgroundShape>
      </BlueShapeWrapper>
      <TopTextWrapper>
        <TopHeader>
          Szczęśliwy <br />
          Styl Życia
        </TopHeader>
        <TopParagraph>
          Jakość jest ważna,
          <br /> bo to <LogoBlack>WAŻNE,</LogoBlack>
          <LogoRed> JAK</LogoRed>
          <br /> przeżyjesz swoje życie.
        </TopParagraph>
      </TopTextWrapper>
      <TopImageBox />
    </TopWrapper>
  </>
);

export default TopSection;
