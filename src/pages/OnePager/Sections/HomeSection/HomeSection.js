import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ImagesBackground from 'components/atoms/ImagesBackground/ImagesBackground';
import RectaImgBox from 'components/atoms/RectaImgBox/RectaImgBox';
import { ColumnWrapper, RowWrapper, MainWrapper } from 'utils/Wrappers/Wrappers';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const HomeWrapper = styled(MainWrapper)`
  flex-direction: row;
  padding-left: 25rem;
`;

const RedBackground = styled(ImagesBackground)`
  background-color: ${({ theme }) => theme.elemRed};
`;

const HomeRectaImgBox = styled(RectaImgBox)`
  position: relative;
  right: 11rem;
`;

const HomeTextWrapper = styled(ColumnWrapper)`
  position: relative;
  top: 7.5rem;
  right: 16rem;
`;

const ParaWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;

  ${({ first }) =>
    first &&
    css`
      padding-left: 10rem;
    `}

  ${({ second }) =>
    second &&
    css`
      padding-left: 16rem;
    `}
`;

const HomeParagraph = styled(Paragraph)`
margin: 0;

${({ first }) =>
  first &&
  css`
    font-size: 2.6rem;
    font-weight: 600;
    text-transform: uppercase;
  `}

${({ second }) =>
  second &&
  css`
    font-size: 1.8rem;
    font-weight: 500;
  `}

${({ third }) =>
  third &&
  css`
    font-size: 1.6rem;
  `}
`;

const HomeSection = ({ firstPara, secondPara, thirdPara }) => {
  return (
    <>
      <HomeWrapper>
        <RowWrapper>
          <RedBackground />
          <HomeRectaImgBox />
        </RowWrapper>
        <HomeTextWrapper>
          <ParaWrapper first>
            <HomeParagraph first>{firstPara}</HomeParagraph>
          </ParaWrapper>
          <ParaWrapper second>
            <HomeParagraph second>{secondPara}</HomeParagraph>
          </ParaWrapper>
          <ParaWrapper>
            <HomeParagraph third>{thirdPara}</HomeParagraph>
          </ParaWrapper>
        </HomeTextWrapper>
      </HomeWrapper>
    </>
  );
};

HomeSection.propTypes = {
  firstPara: PropTypes.string.isRequired,
  secondPara: PropTypes.string.isRequired,
  thirdPara: PropTypes.string.isRequired,
};

export default HomeSection;
