import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import LogoKavi from 'assets/logos/logoK.jpg';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';
import BlogLink from '../../atoms/BlogLink/BlogLink';

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 200;
  -webkit-box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);
  -moz-box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);
  box-shadow: -1px 1px 29px 0px rgba(199, 221, 227, 0.47);
`;

const Logo = styled(NavLink)`
  margin: 0;
  min-width: 29rem;
  height: 5rem;
  background-image: url(${LogoKavi});
  display: block;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
`;

const NavigationWrapper = styled.div`
  position: relative;
  width: 124.6rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavlinksWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  ${({ pageType }) =>
    pageType === 'onePager' &&
    css`
      background-color: ${({ theme }) => theme.elemBlue};
    `}

  ${({ pageType }) =>
    pageType === 'about' &&
    css`
      background-color: rgb(199, 230, 247);
    `}
`;

const Navigationbar = ({ pageType }) => (
  <MainWrapper>
    <Logo to="/" />
    <NavigationWrapper>
      <NavlinksWrapper>
        <NavbarLink to="/aboutme">O mnie</NavbarLink>
        <NavbarLink to="/lifeqm">Life QM</NavbarLink>
        <BlogLink to="/blog" />
      </NavlinksWrapper>
      <NavlinksWrapper pageType={pageType}>
        <NavbarLink secondary to="/consultation">
          Konsultacje i Szkolenia
        </NavbarLink>
        <NavbarLink secondary to="/shop">
          Sklep
        </NavbarLink>
        <NavbarLink secondary to="/contact">
          Kontakt
        </NavbarLink>
      </NavlinksWrapper>
    </NavigationWrapper>
  </MainWrapper>
);

Navigationbar.propTypes = {
  pageType: PropTypes.oneOf(['onePager', 'about']),
};

Navigationbar.defaultProps = {
  pageType: 'onePager',
};
export default Navigationbar;
