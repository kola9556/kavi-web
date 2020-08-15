import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { CONSULT_TYPES } from 'utils/constans';
import { paths } from 'utils/paths';
import { media } from 'utils';
import MainButton from 'components/atoms/MainButton/MainButton';
import individual from 'assets/images/individual.jpg';
import firm from 'assets/images/firm.jpg';
import arrowsDesktop from 'assets/images/smallerArrows.jpg';
import arrows from 'assets/images/xxsArrows.jpg';

const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.desktop`
    padding: 2rem;
    flex-direction: row;
  `}
`;

const SingleBoxWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  margin: 8rem 0 4rem;

  ${media.desktop`
    margin: 4rem 0 4rem;
    padding: 0 8rem;
  `}
`;

const Icon = styled.div`
  width: 10rem;
  height: 10rem;
  margin-bottom: 4rem;
  background-image: url(${individual});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  ${({ consultType }) =>
    consultType === CONSULT_TYPES.firm &&
    css`
      background-image: url(${firm});
    `}

  ${media.desktop`
    width: 20rem;
    height: 20rem;
  `}
`;

const Label = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.navyblueText};
  font-weight: 700;
  margin-bottom: 1rem;

  ${media.desktop`
    font-size: 2.6rem;
  `}
`;

const List = styled.ul`
  list-style-image: url(${arrows});
  padding: 0px 0px 20px 40px;

  ${media.desktop`
    list-style-image: url(${arrowsDesktop});
  `}
`;

const Item = styled.li`
  padding-left: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
    font-size: 1.8rem;
  `}
`;

const ButtonWrapper = styled.div`
  position: relative;

  ${({ consultType }) =>
    consultType === CONSULT_TYPES.firm &&
    css`
      top: 1.8rem;

      ${media.desktop`
        top: 2.3rem;
      `}
    `}
`;

const ConsultBox = ({ content }) => {
  return (
    <>
      <BoxesWrapper>
        {content.map((item) => (
          <>
            <SingleBoxWrapper>
              <Icon consultType={item.type} />
              <Label>{item.label}</Label>
              <List>
                {item.texts.map((textItem) => (
                  <Item>{textItem.text}</Item>
                ))}
              </List>
              <ButtonWrapper consultType={item.type}>
                <MainButton to={paths.consultation}>Więcej</MainButton>
              </ButtonWrapper>
            </SingleBoxWrapper>
          </>
        ))}
      </BoxesWrapper>
    </>
  );
};

ConsultBox.propTypes = {
  content: PropTypes.element.isRequired,
};

export default ConsultBox;
