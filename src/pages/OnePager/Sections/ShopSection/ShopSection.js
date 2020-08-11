import React from 'react';
import styled from 'styled-components';
import { MainWrapper, RowWrapper } from 'utils/Wrappers/Wrappers';
import Cover from 'assets/images/book.jpg';
import SectionBreak from 'components/molecules/SectionBreak/SectionBreak';
import DotsAndButton from '../../../../components/molecules/DotsAndButton/DotsAndButton';
import ShopBox from '../../../../components/organisms/ShopBox/ShopBox';

const ShopWrapper = styled(MainWrapper)`
  padding: 0rem 0 30rem 20rem;
`;
const ContentWrapper = styled(RowWrapper)`
  padding-top: 6rem;
`;

const Book = styled.div`
  position: relative;
  right: 8rem;
  top: 5rem;
  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10rem 0 10rem 0;
  width: 23.5rem;
  height: 35rem;
`;

const ButtonWrapper = styled.div`
  position: relative;
  top: 2rem;
  left: 4rem;
`;

const ShopSection = () => {
  return (
    <>
      <ShopWrapper>
        <SectionBreak firstTitle="Kursy i Książki" secondTitle="Sklep" />
        <ContentWrapper>
          <Book />
          <ShopBox />
        </ContentWrapper>
        <ButtonWrapper>
          <DotsAndButton path="/shop" activeColor="blue" side="left" dots="yes" />
        </ButtonWrapper>
      </ShopWrapper>
    </>
  );
};

export default ShopSection;
