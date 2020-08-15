import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';

const HamburgerWrapper = styled.button`
  margin-right: 3rem;
  text-decoration: none;
  border: none;
  background-color: transparent;
  display: inline-block;
  outline: none;
  cursor: pointer;

  ${media.desktop`display: none;`}
`;

const HamburgerBar = styled.div`
  width: 3.5rem;
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.elemBlue};
  margin: 0.6rem 0;
  transition: 0.4s;

  :first-child {
    &.change {
      transform: rotate(-45deg) translate(-0.9rem, 0.6rem);
    }
  }
  :nth-child(2) {
    &.change {
      opacity: 0;
    }
  }

  :last-child {
    &.change {
      transform: rotate(45deg) translate(-0.8rem, -0.8rem);
    }
  }
`;

const HamburgerButton = ({ handleHamClick, buttonActive }) => (
  <>
    <HamburgerWrapper onClick={handleHamClick}>
      <HamburgerBar className={buttonActive === true ? 'change' : 'HamburgerBar'} />
      <HamburgerBar className={buttonActive === true ? 'change' : 'HamburgerBar'} />
      <HamburgerBar className={buttonActive === true ? 'change' : 'HamburgerBar'} />
    </HamburgerWrapper>
  </>
);

HamburgerButton.propTypes = {
  handleHamClick: PropTypes.func.isRequired,
  buttonActive: PropTypes.bool.isRequired,
};

export default HamburgerButton;
