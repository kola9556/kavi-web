import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoBlog from 'assets/logos/WazneJak.jpg';
import NavbarLink from '../NavbarLink/NavbarLink';

const BlogLogo = styled(NavLink)`
  width: 100px;
  height: 27px;
  background-image: url(${logoBlog});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;

  &.active {
    width: 110px;
    height: 37px;
  }
`;

const BlogLink = () => (
  <>
    <NavbarLink tertiary to="/blog">
      <BlogLogo to="/blog" />
    </NavbarLink>
  </>
);

export default BlogLink;
