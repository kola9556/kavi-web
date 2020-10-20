import React from 'react';
import kaviProfile from 'assets/images/kaviProfile.jpg';
import MainButton from 'components/atoms/MainButton';
import RoundImage from 'components/atoms/RoundImage';
import styled from 'styled-components';
import { MainHeading, PostscriptHeading } from 'utils/Headers';
import { paths } from 'utils/paths';

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
        <MainButton to={paths.shop}>
          Autorka <br />
          „Autopilot Szczęścia”
        </MainButton>
      </GrWrapper>
    </>
  );
};

export default Greet;
