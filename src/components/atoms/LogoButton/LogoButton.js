import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'utils';
import LogoW from 'assets/images/logoW.jpg';

const ButtonWrapper = styled.button`
  width: 24.3rem;
  height: 15rem;
  margin: 0 2rem;
  background-image: url(${LogoW});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  background-color: white;
  outline: none;
  border: 5px solid ${({ theme }) => theme.logoBorderBlue};
  border-radius: 0 6rem 0 6rem;
  box-shadow: 2px 2px 2px #c1c1c1;

  :hover {
    border: 8px solid ${({ theme }) => theme.redText};
  }

  ${media.desktop`
    width: 33.6rem;
    height: 21rem;
    border-radius: 0 7rem 0 7rem;
  `}
`;

const LogoButton = () => {
  return (
    <>
      <ButtonWrapper as={NavLink} to="/blog" />
    </>
  );
};

export default LogoButton;
