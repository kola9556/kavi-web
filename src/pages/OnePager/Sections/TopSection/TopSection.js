import React from 'react';
import kaviBlue from 'assets/images/KaviBlue.jpg';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';

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
  animation-duration: 3.5s;
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
  width: 50vw;
  height: 80vh;
  background-color: ${({ theme }) => theme.elemBlue};
  border-radius: 0 0 0 13rem;
  top: 7rem;
  right: 0;

  ${media.desktop`
  width: 32vw;
  height: 85vh;
  top: 5rem;
  `}
`;

const TopSection = ({ heading, paragraph }) => {
  return (
    <>
      <TopWrapper>
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
  heading: PropTypes.element.isRequired,
  paragraph: PropTypes.element.isRequired,
};

export default TopSection;
