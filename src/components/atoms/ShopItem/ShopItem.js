import React, { useEffect } from 'react';

export const ShopItem = () => {
  useEffect(() => {
    window.xProductBrowser(
      'categoriesPerRow=3',
      'views=grid(20,3) list(60) table(60)',
      'categoryView=grid',
      'searchView=list',
      'id=my-store-36587055',
    );
  }, []);
  return (
    <div className="item-container">
      <div id="my-store-36587055" />
    </div>
  );
};
