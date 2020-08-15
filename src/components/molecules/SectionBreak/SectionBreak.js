import React from 'react';
import styled from 'styled-components';
import LogoW from 'assets/images/logoW.jpg';
import PropTypes from 'prop-types';
import { media } from 'utils';
import ArrowIcon from 'components/atoms/ArrowIcon/ArrowIcon';

const SecBrWrapper = styled.div`
  display: flex;
  width: 90vw;
  flex-direction: row;
  align-items: center;

  ${media.desktop`
    width: 75vw;
    margin: 12rem 0 2rem 0;
  `}
`;

const Icon = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 16rem;
  height: 5rem;
  background-image: url(${LogoW});

  ${media.desktop`
    width: 21.9rem;
    height: 6.6rem;
  `}
`;

const Line = styled.div`
  min-width: 5rem;
  margin: 0 0.5rem;
  height: 0.1rem;
  border-top: 1px solid ${({ theme }) => theme.navbarGrey};
  display: flex;
  flex-grow: 1;

  ${media.desktop`
  margin: 0 1.5rem;
  `}
`;

const LeftHeader = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
  font-size: 2.8rem;
  font-weight: 800;
  `}
`;

const RightHeader = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.lightBlueText};

  ${media.desktop`
  font-size: 5.8rem;
  font-weight: 900;
  `}
`;

const SectionBreak = ({ firstTitle, secondTitle, icon }) => {
  return (
    <>
      <SecBrWrapper>
        <ArrowIcon />
        {icon ? <Icon /> : <LeftHeader>{firstTitle}</LeftHeader>}
        <Line />
        <RightHeader>{secondTitle}</RightHeader>
      </SecBrWrapper>
    </>
  );
};

SectionBreak.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};

SectionBreak.defaultProps = {
  icon: false,
};

export default SectionBreak;
