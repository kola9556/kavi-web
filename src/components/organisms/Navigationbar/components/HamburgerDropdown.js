import React from 'react';
import NavbarLink from 'components/atoms/NavbarLink';
import { ShopNavLInk } from 'components/atoms/ShopNavLink';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { paths } from 'utils/paths';

const DropdownWrapper = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 3rem;
  position: fixed;
  right: 0;
  top: 7rem;
  z-index: 100;
  transform: translate(${({ isVisible }) => (isVisible ? '-3' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const HamburgerDropdown = ({ isVisible }) => {
  return (
    <DropdownWrapper isVisible={isVisible}>
      <NavbarLink to={paths.aboutme}>O mnie</NavbarLink>
      <NavbarLink to={paths.lifeqm}>Life QM</NavbarLink>
      <NavbarLink to={paths.blog}>Blog</NavbarLink>
      <NavbarLink to={paths.consultation}>Konsultacje i Szkolenia</NavbarLink>
      <ShopNavLInk />
      <NavbarLink to={paths.contact}>Kontakt</NavbarLink>
    </DropdownWrapper>
  );
};

HamburgerDropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default HamburgerDropdown;
