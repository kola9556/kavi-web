import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColumnWrapper } from 'components/atoms/Wrappers/Wrappers';
import { SHeader, SHeaderBold, SParagraph, BoldSpan } from 'components/atoms/Headers/Headers';

const LabelWrapper = styled(ColumnWrapper)`
  width: 38.4rem;
  height: 29.6rem;
  border: 2px solid ${({ theme }) => theme.lightBlueText};
  border-radius: 0 10rem 0 10rem;
  justify-content: center;
`;

const Title = styled(SHeaderBold)`
  padding: 3rem 0 3rem 2rem;
`;

const Description = styled(SParagraph)`
  padding-left: 2rem;
  max-width: 85%;
`;

const Price = styled(SHeader)`
  padding: 3rem 0 0 15rem;
`;

const Labels = [
  {
    id: 1,
    title: 'Autopilot Sczęścia',
    description:
      'Wczesne lata dwutysięczne. Blokowisko na osiedlu RZNiW żyje w rytmie rapu, oddycha dymem z jointów i nie toleruje obcych. Na dwunastym piętrze jednego z bloków mieszka Deso.',
    price: '59,99zł',
  },
];

const BookLabel = ({ id }) => {
  return (
    <>
      <LabelWrapper id={id}>
        {Labels.map((label) =>
          label.id === id ? (
            <>
              <Title>{label.title}</Title>
              <Description>{label.description}</Description>
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
