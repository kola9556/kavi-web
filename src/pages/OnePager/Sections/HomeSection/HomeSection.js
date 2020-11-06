import React from 'react';
import book from 'assets/images/book.jpg';
import { ShopNavLInk } from 'components/atoms/ShopNavLink';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils';

const HomeWrapper = styled.div`
  margin: 10rem 0 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.desktop`
    margin: 30rem 0 20rem;
    display: flex;
    flex-direction: row;
  `}
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
  position: relative;
  right: 3rem;

  ${media.desktop`
  display: none;
  `}

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      ${media.desktop`
        display: flex;
        position: relative;
        left 3rem;
        bottom: 3rem;
      `}
    `}
`;

const RedBackground = styled.div`
  width: 9.3rem;
  height: 15rem;
  border-radius: 0 2rem 0 2rem;
  background-color: ${({ theme }) => theme.elemRed};
  position: relative;
  left: 5rem;

  ${media.desktop`
  width: 18rem;
  height: 28.9rem;
  border-radius: 0 6rem 0 6rem;
  position: static;
  left:0;
  `}
`;

const HomeRectaImgBox = styled.div`
  position: relative;
  width: 8rem;
  height: 11.8rem;
  background-image: url(${book});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;

  ${media.desktop`
  width: 16rem;
  height: 23.7rem;
  right: 11rem;
  `}
`;

const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${media.desktop`
  top: 0rem;
  right: 0rem;
  `}
`;

const ParaWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;

  ${media.desktop`
  display: flex;
  padding-bottom: 2rem;
  position: relative;

  ${({ first }) =>
    first &&
    css`
      right: 5rem;
    `}

    ${({ second }) =>
      second &&
      css`
        top: 2rem;
      `}

  ${({ third }) =>
    third &&
    css`
      top: 4rem;
      right: 16rem;
    `}`}
`;

const HomeParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.navyblueText};

  ${({ first }) =>
    first &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;

      ${media.desktop`
    font-size: 2.2rem;
    `}
    `}

  ${({ second }) =>
    second &&
    css`
      font-size: 1.3rem;
      font-weight: 500;

      ${media.desktop`
    font-size: 1.6rem;
    `}
    `}

${({ third }) =>
    third &&
    css`
      font-size: 1.2rem;
      margin-left: 8rem;

      ${media.desktop`
    font-size: 1.4rem;
    `}
    `}
`;

const ButtonWrapper = styled.div`
  position: relative;
  ${media.desktop`
   top: 16rem;
   left: 20rem;
  `}
`;

const HomeSection = ({ firstPara, secondPara, thirdPara }) => {
  return (
    <>
      <HomeWrapper>
        <ButtonWrapper>
          <ShopNavLInk color="red" to="/shop">
            Kup teraz
          </ShopNavLInk>
        </ButtonWrapper>
        <BookWrapper desktop>
          <RedBackground />
          <HomeRectaImgBox />
        </BookWrapper>
        <HomeTextWrapper>
          <ParaWrapper first>
            <HomeParagraph first>{firstPara}</HomeParagraph>
          </ParaWrapper>
          <ParaWrapper second>
            <HomeParagraph second>{secondPara}</HomeParagraph>
          </ParaWrapper>
          <BookWrapper>
            <RedBackground />
            <HomeRectaImgBox />
          </BookWrapper>
          <ParaWrapper third>
            <HomeParagraph third>{thirdPara}</HomeParagraph>
          </ParaWrapper>
        </HomeTextWrapper>
      </HomeWrapper>
    </>
  );
};

HomeSection.propTypes = {
  firstPara: PropTypes.element.isRequired,
  secondPara: PropTypes.element.isRequired,
  thirdPara: PropTypes.element.isRequired,
};

export default HomeSection;
