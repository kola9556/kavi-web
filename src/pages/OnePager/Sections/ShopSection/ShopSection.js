import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import { paths } from 'utils/paths';

import cover from 'assets/images/book.jpg';
import SectionBreak from 'components/molecules/SectionBreak/SectionBreak';
import MainButton from 'components/atoms/MainButton/MainButton';
import ShopBox from '../../../../components/organisms/ShopBox/ShopBox';

const ShopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;

  ${media.desktop`
    margin-bottom: 30rem;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  position: relative;
  right: 4.5rem;

  ${media.desktop`
    padding-top: 3rem;
    position: static;
  `}
`;

const Book = styled.div`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 3rem 0 3rem 0;
  width: 9rem;
  height: 12.8rem;

  ${media.desktop`
    position: relative;
    right: 8rem;
    top: 5rem;
    width: 23.5rem;
    height: 35rem;
    border-radius: 10rem 0 10rem 0;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 2rem 0;

  ${media.desktop`
    position: relative;
    left: 12rem;
  `}
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
          <MainButton to={paths.shop}>Więcej</MainButton>
        </ButtonWrapper>
      </ShopWrapper>
    </>
  );
};

export default ShopSection;
