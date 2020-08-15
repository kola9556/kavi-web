import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';
import MainButton from 'components/atoms/MainButton/MainButton';
import { BoldSpan } from 'utils/Headers';

const LabelWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 18rem;
  height: 15.1rem;
  border: 2px solid ${({ theme }) => theme.lightBlueText};
  border-radius: 0 7rem 0 7rem;
  justify-content: center;

  ${media.desktop`
    width: 38.4rem;
    height: 29.6rem;
    border-radius: 0 10rem 0 10rem;
  `}
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  padding: 0rem 0 1rem 1rem;

  ${media.desktop`
    font-size: 2rem;
    padding: 3rem 0 3rem 2rem;
  `}
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  padding-left: 2rem;
  max-width: 85%;

  ${media.desktop`
    font-size: 1.6rem;
  `}
`;

const Price = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  padding: 2rem 0 0 10rem;

  ${media.desktop`
    font-size: 2rem;
    padding: 3rem 0 0 15rem;
  `}
`;

const labels = [
  {
    id: 1,
    title: 'Autopilot Sczęścia',
    description:
      'Wczesne lata dwutysięczne. Blokowisko na osiedlu RZNiW żyje w rytmie rapu, oddycha dymem z jointów i nie toleruje obcych. Na dwunastym piętrze jednego z bloków mieszka Deso.',
    price: '59,99zł',
  },
];

const ButtonWrapper = styled.div`
  position: absolute;
  left: 12rem;
  top: 8rem;

  ${media.desktop`
    top: 1rem;
    left: 28rem;
  `}
`;

const BookLabel = ({ id }) => {
  return (
    <>
      <LabelWrapper id={id}>
        {labels.map((label) =>
          label.id === id ? (
            <>
              <Title>{label.title}</Title>
              <Description>{label.description}</Description>
              <ButtonWrapper>
                <MainButton color="red" path="/shop">
                  Kup teraz
                </MainButton>
              </ButtonWrapper>
              <Price>
                <BoldSpan>Cena:</BoldSpan> &nbsp;&nbsp;{label.price}
              </Price>
            </>
          ) : null,
        )}
      </LabelWrapper>
    </>
  );
};

BookLabel.propTypes = {
  id: PropTypes.number.isRequired,
};

export default BookLabel;
