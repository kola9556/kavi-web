import React from 'react';
import NavbarLink from './NavbarLink';

export default {
  title: 'Navigation Links',
  component: NavbarLink,
};

export const OMnie = () => {
  return <NavbarLink to="/">O mnie</NavbarLink>;
};

export const LifeQM = () => {
  return <NavbarLink to="/">Life QM</NavbarLink>;
};

export const KonsultacjeISzkolenia = () => {
  return (
    <NavbarLink secondary to="/">
      Konsultacje i Szkolenia
    </NavbarLink>
  );
};
