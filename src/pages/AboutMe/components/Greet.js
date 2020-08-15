import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import MainButton from 'components/atoms/MainButton/MainButton';
import KaviProfile from 'assets/images/kaviProfile.jpg';

const GrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

const GrImg = styled.div`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1.5rem;
  background-image: url(${KaviProfile});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30rem;
  opacity: 0.98;
`;

const GrHeading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  margin-bottom: 0.5rem;
  text-align: center;

  ${media.desktop`
  font-size: 4rem;
  `}
`;
const SecondGrHeading = styled.h2`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  word-spacing: 0.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: center;
`;

const Greet = () => {
  return (
    <>
      <GrWrapper>
        <GrImg />
        <GrHeading>Cześć! Jestem Kavi,</GrHeading>
        <SecondGrHeading>trener skutecznej zmiany i bloger</SecondGrHeading>
        <MainButton>
          Autorka <br />
          „Autopilot Szczęścia”
        </MainButton>
      </GrWrapper>
    </>
  );
};

export default Greet;
