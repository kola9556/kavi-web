import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import KaviProfile from 'assets/images/kaviProfile.jpg';
import { XxlHeading, XsHeader, SParagraph } from 'utils/Headers/Headers';

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

const GrHeading = styled(XxlHeading)`
  margin-bottom: 0.5rem;
`;
const GrSecHeading = styled(XsHeader)`
  word-spacing: 0.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const GrButton = styled(NavLink)`
  margin: 3rem 0;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.lightBlueText};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonParagraph = styled(SParagraph)`
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;

  :hover {
    animation: changecolor 1.5s;
    background-color: white;
    color: ${({ theme }) => theme.lightBlueText};

    @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.lightBlueText};
        color: ${({ theme }) => theme.lightBlueText};
      }
      to {
        background-color: white;
        color: ${({ theme }) => theme.lightBlueText};
      }
    }
  }
`;

const Greet = () => {
  return (
    <>
      <GrWrapper>
        <GrImg />
        <GrHeading>Cześć! Jestem Kavi,</GrHeading>
        <GrSecHeading>trener skutecznej zmiany i bloger</GrSecHeading>
        <GrButton to="/shop">
          <ButtonParagraph>Autorka „Autopilot Szczęścia”</ButtonParagraph>
        </GrButton>
      </GrWrapper>
    </>
  );
};

export default Greet;
