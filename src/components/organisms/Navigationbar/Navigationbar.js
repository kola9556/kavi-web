import React from 'react';
import styled, { css } from 'styled-components';
import LogoKavi from 'components/atoms/LogoKavi/LogoKavi';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';
import WazneJakLink from '../../atoms/WazneJakLink/WazneJakLink';

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  height: 110px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  z-index: 2;
  background-color: white;
`;
const InnerWrapper = styled.div`
  margin: 0;
  display: flex;
  position: relative;
  width: 1070px;
  height: 60%;
  flex-direction: row;
`;
const ColoredWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;

  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.elemBlue};
      width: 400px;
      height: 100%;
    `}
`;

const Navigationbar = () => (
  <MainWrapper>
    <LogoKavi to="/" />
    <InnerWrapper>
      <ColoredWrapper>
        <NavbarLink to="/aboutme">O mnie</NavbarLink>
        <NavbarLink to="/lifeqm">Life QM</NavbarLink>
        <WazneJakLink to="/blog" />
      </ColoredWrapper>
      <ColoredWrapper blue>
        <NavbarLink secondary to="/consultation">
          Konsultacje i Szkolenia
        </NavbarLink>
        <NavbarLink secondary to="/shop">
          Sklep
        </NavbarLink>
        <NavbarLink secondary to="/contact">
          Kontakt
        </NavbarLink>
      </ColoredWrapper>
    </InnerWrapper>
  </MainWrapper>
);

export default Navigationbar;
