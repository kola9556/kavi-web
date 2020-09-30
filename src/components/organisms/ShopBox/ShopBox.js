import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

import BookLabel from '../../molecules/BookLabel/BookLabel';

const ShopBoxWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0 3rem;
  width: 5rem;
  bottom: 1rem;

  ${media.desktop`
    margin: 0;
    width: 35rem;
  `}
`;

const ShopBox = () => {
  return (
    <>
      <ShopBoxWrapper>
        <BookLabel />
      </ShopBoxWrapper>
    </>
  );
};

export default ShopBox;
