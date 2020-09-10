import React from 'react';
import NavbarLink from 'components/atoms/NavbarLink/NavbarLink';

export const ShopNavLInk = () => {
  const handleShopLink = (e) => {
    e.preventDefault();
    window.location.href = '/shop';
  };

  return (
    <NavbarLink onClick={handleShopLink} to="/shop">
      Sklep
    </NavbarLink>
  );
};
