import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ColumnWrapper, RowWrapper } from 'components/atoms/Wrappers/Wrappers';
import BookLabel from '../../molecules/BookLabel/BookLabel';

const ShopWrapper = styled(ColumnWrapper)`
  padding: 0;
`;

const ContentWrapper = RowWrapper;

const ButtonWrapper = styled.div`
  position: relative;
  right: 12rem;
  bottom: 9rem;
`;

const ShopBox = () => {
  return (
    <>
      <ShopWrapper>
        <ContentWrapper>
          <BookLabel id={1} />
          <ButtonWrapper>
            <Button activeColor="red" path="/shop">
              Kup teraz
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
      </ShopWrapper>
    </>
  );
};

export default ShopBox;
