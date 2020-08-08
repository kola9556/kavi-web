import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 175px;
  height: 51px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  background-color: ${({ theme }) => theme.buttonBlue};
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.borderBlue};
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.buttonBlueHover};
  }

  :active {
    box-shadow: 1px 1px 1px #c1c1c1;
  }

  ${({ color }) =>
    color === 'red' &&
    css`
      color: ${({ theme }) => theme.buttonTextRed};
      background-color: ${({ theme }) => theme.buttonRed};
      border: 1px solid ${({ theme }) => theme.borderRed};

      :hover {
        background-color: ${({ theme }) => theme.buttonRedHover};
      }
    `}
`;

const Button = ({ children, activeColor, path }) => {
  return (
    <>
      <StyledButton as={NavLink} to={path} color={activeColor}>
        {children}
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  activeColor: PropTypes.oneOf(['red', 'blue']),
  path: PropTypes.oneOf([
    '/',
    '/aboutme',
    '/lifeqm',
    '/blog',
    '/consultations',
    '/shop',
    '/contact',
  ]),
};

Button.defaultProps = {
  activeColor: 'blue',
  path: '/',
};

export default Button;
