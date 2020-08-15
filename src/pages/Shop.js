import React from 'react';
import styled from 'styled-components';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';

const ShopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 2.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.navyblueText};
`;

const Shop = () => (
  <>
    <Navigationbar />
    <ShopWrapper>
      <Heading>Sorry!</Heading>
      <Paragraph>This side is in the process of building</Paragraph>
    </ShopWrapper>
  </>
);

export default Shop;
