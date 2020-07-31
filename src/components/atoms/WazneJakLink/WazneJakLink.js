import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoWazne from 'assets/logos/WazneJak.jpg';
import NavbarLink from '../NavbarLink/NavbarLink';

const WazneJak = styled(NavLink)`
  width: 100px;
  height: 27px;
  background-image: url(${logoWazne});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;

  &.active {
    height: 30px;
    width: 150px;
  }
`;

const WazneJakLink = () => (
  <>
    <NavbarLink tertiary to="/blog">
      <WazneJak to="/blog" />
      <NavbarLink quaternary to="/blog">
        Blog
      </NavbarLink>
    </NavbarLink>
  </>
);

export default WazneJakLink;
