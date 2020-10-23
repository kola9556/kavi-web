/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoKavi from 'assets/logos/logoKavi.png';
import { ShopNavLInk } from 'components/atoms/ShopNavLink';
import NavigationLink from 'components/organisms/Navigationbar/components/NavigationLink';
import styled from 'styled-components';
import { media } from 'utils';

import BlogLogo from '../../atoms/BlogLogo';
import HamburgerButton from './components/HamburgerButton';
import HamburgerDropdown from './components/HamburgerDropdown';

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 200;
  -webkit-box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);
  -moz-box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);
  box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);

  ${media.desktop`
  height: 5rem;
  `}
`;

const Logo = styled(NavLink)`
  margin: 0;
  width: 20rem;
  height: 7rem;
  background-image: url(${logoKavi});
  display: block;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;

  ${media.desktop`
  width: 18rem;
  height: 5rem;
  background-size: 100%;
  `}
`;

const NavlinksWrapper = styled.div`
  margin: 0;
  display: none;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: space-between;
  `}
`;

class Navigationbar extends Component {
  state = { buttonActive: false, isDropdownVisible: false };

  handleHamburgerClick = () => {
    const { buttonActive } = this.state;
    return buttonActive === false
      ? this.setState({ buttonActive: true, isDropdownVisible: true })
      : this.setState({ buttonActive: false, isDropdownVisible: false });
  };

  render() {
    const { buttonActive } = this.state;
    const { isDropdownVisible } = this.state;

    return (
      <NavbarWrapper>
        <Logo to="/" />
        <HamburgerButton
          buttonActive={buttonActive}
          handleHamClick={() => this.handleHamburgerClick()}
        />
        <HamburgerDropdown isVisible={isDropdownVisible} />
        <NavlinksWrapper>
          <NavigationLink to="/aboutme">O mnie</NavigationLink>
          <NavigationLink to="/lifeqm">Life QM</NavigationLink>
          <BlogLogo to="/blog" />
          <NavigationLink to="/consultation">Konsultacje i Szkolenia</NavigationLink>
          <ShopNavLInk>Sklep</ShopNavLInk>
          <NavigationLink to="/contact">Kontakt</NavigationLink>
        </NavlinksWrapper>
      </NavbarWrapper>
    );
  }
}

export default Navigationbar;
