import React from 'react';
import kaviBlue from 'assets/images/KaviBlue.jpg';
import BlueBackgroundShape from 'components/atoms/BackgroundShape/BackgroundShape';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';

// Flex Wrapper for all TopSection elements. Main children: TopTextWrapper, TopImageBox and BlueShapeWrapper
const TopWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  padding-top: 3rem;
  display: flex;
  flex-direction: column-reverse;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
    height: 80vh;
    padding: 3rem 15rem 3rem 22rem;
  `}
`;

// Text
const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 2rem;

  ${media.desktop`margin: 5rem 10rem 0 0;`}
`;

const TopHeader = styled.h1`
  color: ${({ theme }) => theme.redText};
  font-size: 5rem;
  margin: 0;
  text-shadow: 1px 1px 1px #c1c1c1;
  z-index: 5;

  ${media.desktop`font-size: 6rem;`}
`;

const TopParagraph = styled.p`
  color: ${({ theme }) => theme.navyblueText};
  font-size: 2rem;
  padding-left: 5rem;
  z-index: 5;

  ${media.desktop`
  font-size: 2.4rem;
  `}
`;

const TopSquareImgBox = styled.img`
  width: 18.8rem;
  height: 19.4rem;
  object-fit: cover;
  z-index: 5;
  opacity: 1;
  animation-name: example;
  animation-duration: 4s;
  border-radius: 3rem;

  ${media.desktop`
    width: 42.8rem;
    height: 43.4rem;
  `}

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BlueBackground = styled.div`
  margin: 0;
  position: absolute;
  width: 14rem;
  height: 80vh;
  background-color: ${({ theme }) => theme.elemBlue};
  border-radius: 0 0 0 13rem;
  top: 7rem;
  right: 0;

  ${media.desktop`display: none;`}
`;

/* I've made a Wrapper which has the same properties as NvigationWrapper
in Navigationbar just to resolve the problem with the width of BackgroundShape.
Now till some point while resizing the browser (sets by media queries) width of 
BackgroundShape will be the same as width of NavLinksWrapper (with blue props) */
const BlueShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 18rem;
  height: 80vh;
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;

  ${media.desktop`
  display: flex;
  width: 124.6rem;
  `}
`;

/* Text with visibility property of hidden. This text exist only to create the same conditions
to keep the width of the backgroun the same as NavLinksWrapper (blue) */
const InvisibleText = styled.p`
  color: ${({ theme }) => theme.navyblueText};
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

const TopSection = ({ heading, paragraph }) => {
  return (
    <>
      <TopWrapper>
        <BlueShapeWrapper>
          <BlueBackgroundShape>
            {/* This part won't be visible at all. It's only for keeping the same width as NavLinksWrapper (blue) */}
            <InvisibleText>Konsultacje i Szkolenia</InvisibleText>
            <InvisibleText>Sklep</InvisibleText>
            <InvisibleText>Kontakt</InvisibleText>
          </BlueBackgroundShape>
        </BlueShapeWrapper>
        <TopTextWrapper>
          <TopHeader>{heading}</TopHeader>
          <TopParagraph>{paragraph}</TopParagraph>
        </TopTextWrapper>
        <TopSquareImgBox src={kaviBlue} />
      </TopWrapper>
      <BlueBackground />
    </>
  );
};

TopSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default TopSection;
