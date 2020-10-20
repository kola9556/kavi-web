import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils';

const Button = styled(NavLink)`
  margin: 2rem 0;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.lightBlueText};
  text-decoration: none;
  display: block;
  width: 15rem;

  ${media.desktop`
  width: 25rem;

  ${({ color }) =>
    color === 'red' &&
    css`
      width: 15rem;
    `}
  `}

  :hover {
    animation: changecolor 1s;
    background-color: transparent;

    @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.lightBlueText};
      }
      to {
        background-color: transparent;
      }
    }
  }

  ${({ color }) =>
    color === 'red' &&
    css`
      width: 7rem;  
      background-color: ${({ theme }) => theme.buttonRed};
      border: 1px solid ${({ theme }) => theme.borderRed};

      :hover {
        animation: changecolor 1s;
        background-color: transparent;

        @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.buttonRed}};
      }
      to {
        background-color: transparent;
      }
    `}
`;

const ButtonParagraph = styled.p`
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 0;
  font-size: 1.4rem;

  ${media.desktop`
    padding: 1rem 2rem;
    font-size: 1.6rem;
  `}

  :hover {
    animation: changecolor 1s;
    background-color: transparent;
    color: ${({ theme }) => theme.lightBlueText};

    @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.lightBlueText};
        color: ${({ theme }) => theme.lightBlueText};
      }
      to {
        background-color: transparent;
        color: ${({ theme }) => theme.lightBlueText};
      }
    }
  }

  ${({ color }) =>
    color === 'red' &&
    css`
      color: ${({ theme }) => theme.buttonTextRed};
      padding: 0.2rem 1rem;
      font-size: 0.8rem;
    `}
`;

const MainButton = ({ children, to, color }) => {
  return (
    <>
      <Button to={to} color={color}>
        <ButtonParagraph color={color}>{children}</ButtonParagraph>
      </Button>
    </>
  );
};

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOf([
    '/',
    '/aboutme',
    '/lifeqm',
    '/blog',
    '/consultation',
    '/shop',
    '/contact',
    '/collabo',
  ]),
  color: PropTypes.string,
};

MainButton.defaultProps = {
  to: '/',
  color: '',
};

export default MainButton;
