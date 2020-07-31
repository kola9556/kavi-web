import React from 'react';
import LogoKavi from './LogoKavi';

export default {
  title: 'Logo Kavi',
  component: LogoKavi,
};

export const logo = () => {
  return <LogoKavi to="/" />;
};
