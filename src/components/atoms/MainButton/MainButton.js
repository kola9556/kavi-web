import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SParagraph } from 'utils/Headers/Headers';
import { NavLink } from 'react-router-dom';

const Button = styled(NavLink)`
  margin: 3rem 0;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.lightBlueText};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

const ButtonParagraph = styled(SParagraph)`
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;

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
`;

const MainButton = ({ children, to }) => {
  return (
    <>
      <Button to={to}>
        <ButtonParagraph>{children}</ButtonParagraph>
      </Button>
    </>
  );
};

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
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
};

MainButton.defaultProps = {
  to: '/',
};

export default MainButton;
