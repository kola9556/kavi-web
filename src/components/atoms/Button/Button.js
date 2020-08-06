import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 175px;
  height: 51px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  background-color: ${({ theme }) => theme.buttonBlue};
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.borderBlue};

  :hover {
    width: 177px;
    height: 53px;
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
    `}
`;

const Button = ({ children, activeColor }) => {
  return (
    <>
      <StyledButton color={activeColor}>{children}</StyledButton>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  activeColor: PropTypes.oneOf(['red', 'blue']),
};

Button.defaultProps = {
  activeColor: 'blue',
};

export default Button;
