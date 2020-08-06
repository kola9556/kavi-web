import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonBlue = () => {
  return <Button>Więcej</Button>;
};

export const ButtonRed = () => {
  return <Button activeColor="red">Więcej</Button>;
};
