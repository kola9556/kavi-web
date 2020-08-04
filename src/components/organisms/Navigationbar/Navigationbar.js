import React from 'react';
import styled, { css } from 'styled-components';
import LogoKavi from 'components/atoms/LogoKavi/LogoKavi';
import BackgroundShape from 'components/atoms/BackgroundShape/BackgroundShape';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';
import BlogLink from '../../atoms/BlogLink/BlogLink';

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  height: 46px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 200;
`;

const Logo = styled(LogoKavi)``;

const NavigationWrapper = styled.div`
  position: relative;
  width: 1246px;
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

  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.elemBlue};
    `}
`;

const Navigationbar = () => (
  <MainWrapper>
    <Logo to="/" />
    <NavigationWrapper>
      <NavlinksWrapper>
        <NavbarLink to="/aboutme">O mnie</NavbarLink>
        <NavbarLink to="/lifeqm">Life QM</NavbarLink>
        <BlogLink to="/blog" />
      </NavlinksWrapper>
      <NavlinksWrapper blue>
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

export default Navigationbar;
