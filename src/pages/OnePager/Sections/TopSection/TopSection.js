import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import KaviBlue from 'assets/images/KaviBlue.jpg';
import SquareImgBox from 'components/atoms/SquareImgBox/SquareImgBox';
import BackgroundShape from 'components/atoms/BackgroundShape/BackgroundShape';

// Flex Wrapper for all TopSection elements. Main children: TopTextWrapper, TopImageBox and BlueShapeWrapper
const TopWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 3rem 15rem 3rem 22rem;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
`;

// Text
const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem 0 0;

  @media only screen and (min-width: 1500px) and (max-width: 1800px) {
    margin: 5rem 20rem 0 0;
  }
`;

const TopHeader = styled.h1`
  color: ${({ theme }) => theme.redText};
  font-size: 6rem;
  margin: 0;
  text-shadow: 1px 1px 1px #c1c1c1;
`;

const TopParagraph = styled(Paragraph)`
  padding-left: 5rem;
  font-size: 3rem;
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

const TopSquareImgBox = styled(SquareImgBox)`
  opacity: 1;
  animation-name: example;
  animation-duration: 4s;
  border-radius: 60px;

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

/* I've made a Wrapper which has the same properties as NvigationWrapper
in Navigationbar just to resolve the problem with the width of BackgroundShape.
Now till some point while resizing the browser (sets by media queries) width of 
BackgroundShape will be the same as width of NavLinksWrapper (with blue props) */
const BlueShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 124.6rem;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

/* Text with visibility property of hidden. This text exist only to create the same conditions
to keep the width of the backgroun the same as NavLinksWrapper (blue) */
const InvisibleText = styled(Paragraph)`
  font-family: 'Mulish', sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  min-width: 10rem;
  text-decoration: none;
  margin: 0px;
  text-align: center;
  white-space: nowrap;
  visibility: hidden;

  @media only screen and (min-width: 1200px) {
    padding: 0 3rem;
  }

  &.active {
    font-weight: 700;
  }
`;

const TopSection = () => {
  return (
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
            Jakość jest ważna.
            <br /> <LogoBlack>WAŻNE,</LogoBlack>
            <LogoRed> JAK </LogoRed>
            przeżyjesz <br />
            swoje życie.
          </TopParagraph>
        </TopTextWrapper>
        <TopSquareImgBox src={KaviBlue} />
      </TopWrapper>
    </>
  );
};

export default TopSection;
