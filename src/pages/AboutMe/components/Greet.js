import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MainButton from 'components/atoms/MainButton/MainButton';
import KaviProfile from 'assets/images/kaviProfile.jpg';
import { XxxlHeading, XsHeader, SParagraph } from 'utils/Headers/Headers';

const GrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GrImg = styled.div`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1.5rem;
  background-image: url(${KaviProfile});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 300px;
  opacity: 0.98;
`;

const GrHeading = styled(XxxlHeading)`
  margin-bottom: 0.5rem;
`;
const GrSecHeading = styled(XsHeader)`
  word-spacing: 0.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 2rem;
`;

const Greet = () => {
  return (
    <>
      <GrWrapper>
        <GrImg />
        <GrHeading>Cześć! Jestem Kavi,</GrHeading>
        <GrSecHeading>trener skutecznej zmiany i bloger</GrSecHeading>
        <MainButton>Autorka „Autopilot Szczęścia”</MainButton>
      </GrWrapper>
    </>
  );
};

export default Greet;
