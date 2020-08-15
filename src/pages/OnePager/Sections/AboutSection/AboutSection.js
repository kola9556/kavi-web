import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';
import MainButton from 'components/atoms/MainButton/MainButton';
import { paths } from 'utils/paths';
import kaviOrange from 'assets/images/kaviOrange.jpg';
import SectionBreak from 'components/molecules/SectionBreak/SectionBreak';

const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  ${media.desktop`
      flex-direction: row;
      position: relative;
      right: 8rem;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutHeader = styled.h2`
  margin: 3rem 1rem;
  width: 32rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  text-align: center;

  ${media.desktop`
    position: relative;
    left: 18rem;
    font-size: 1.8rem;
    width: 65rem;
  `}
`;

const AboutParagraph = styled.p`
  margin: 2rem 0 0rem;
  width: 32rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
    font-size: 1.6rem;
    text-align: right;
    position: relative;
    left: 12rem;

    ${({ down }) =>
      down &&
      css`
        left: 25rem;
        text-align: center;
        width: 42rem;
      `}
  `}
`;

const ButtonWrapper = styled.div`
  ${media.desktop`
    position: relative;
    left: 58rem;
    bottom: 5rem;
  `}
`;

const AboutGraphicsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;
      position: relative;
      right: 5rem;
      bottom: 4.5rem;
    `}

  ${media.desktop`
  display: none;

  ${({ desktop }) =>
    desktop &&
    css`
      display: flex;
    `}
  `}
`;

const BlueBackground = styled.div`
  width: 11.3rem;
  height: 17rem;
  border-radius: 0 2rem 0 2rem;
  background-color: ${({ theme }) => theme.elemBlue};
  position: relative;
  right: 3rem;

  ${media.desktop`
  width: 22rem;
  height: 35rem;
  border-radius: 0 6rem 0 6rem;
  right: 4rem;
  `}
`;

const AboutImg = styled.img`
  width: 12.8rem;
  height: 13rem;
  object-fit: cover;
  z-index: 5;
  position: relative;
  left: 4rem;

  ${media.desktop`
    width: 26.5rem;
    height: 27rem;
    left: 7rem;
  `}
`;

const AboutSection = ({ paragraphDown, paragraphUp, heading }) => {
  return (
    <>
      <AboutWrapper>
        <SectionBreak firstTitle="Kavi Kozłowska" secondTitle="O mnie" />
        <ContentWrapper>
          <TextWrapper>
            <AboutHeader>{heading}</AboutHeader>
            <AboutGraphicsWrapper>
              <AboutImg src={kaviOrange} />
              <BlueBackground />
            </AboutGraphicsWrapper>
            <AboutParagraph>{paragraphUp}</AboutParagraph>
            <AboutParagraph down>{paragraphDown}</AboutParagraph>
            <ButtonWrapper>
              <MainButton to={paths.aboutme}>Więcej</MainButton>
            </ButtonWrapper>
          </TextWrapper>
          <AboutGraphicsWrapper desktop>
            <AboutImg src={kaviOrange} />
            <BlueBackground />
          </AboutGraphicsWrapper>
        </ContentWrapper>
      </AboutWrapper>
    </>
  );
};

AboutSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphUp: PropTypes.string.isRequired,
  paragraphDown: PropTypes.string.isRequired,
};

export default AboutSection;
