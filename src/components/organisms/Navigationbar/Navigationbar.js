import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import { NavLink } from 'react-router-dom';
import logoKavi from 'assets/logos/logoK.jpg';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';
import HamburgerDropdown from './components/HamburgerDropdown/HamburgerDropdown';
import BlogLink from '../../atoms/BlogLink/BlogLink';

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
  background-size: 80%;
  `}
`;

const NavlinksWrapper = styled.div`
  margin: 0;
  display: none;

  ${media.desktop`
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
          <NavbarLink to="/aboutme">O mnie</NavbarLink>
          <NavbarLink to="/lifeqm">Life QM</NavbarLink>
          <BlogLink to="/blog" />
          <NavbarLink to="/consultation">Konsultacje i Szkolenia</NavbarLink>
          <NavbarLink to="/shop">Sklep</NavbarLink>
          <NavbarLink to="/contact">Kontakt</NavbarLink>
        </NavlinksWrapper>
      </NavbarWrapper>
    );
  }
}

export default Navigationbar;
