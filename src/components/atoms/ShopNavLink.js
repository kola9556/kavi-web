import React from 'react';
import NavigationLink from 'components/organisms/Navigationbar/components/NavigationLink';
import PropTypes from 'prop-types';

export const ShopNavLInk = ({ color, children }) => {
  const handleShopLink = (e) => {
    e.preventDefault();
    window.location.href = '/shop';
  };

  return (
    <NavigationLink onClick={handleShopLink} to="/shop" color={color}>
      {children}
    </NavigationLink>
  );
};

ShopNavLInk.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

ShopNavLInk.default = {
  color: null,
  children: 'button',
};
