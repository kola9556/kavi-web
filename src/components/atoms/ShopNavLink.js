import React from 'react';
import NavigationLink from 'components/organisms/Navigationbar/components/NavigationLink/NavigationLink';

export const ShopNavLInk = () => {
  const handleShopLink = (e) => {
    e.preventDefault();
    window.location.href = '/shop';
  };

  return (
    <NavigationLink onClick={handleShopLink} to="/shop">
      Sklep
    </NavigationLink>
  );
};
