import React from 'react';
import styled from 'styled-components';
import LogoW from 'assets/images/logoW.jpg';
import PropTypes from 'prop-types';
import ArrowIcon from 'components/atoms/ArrowIcon/ArrowIcon';
import { XlHeaderBold, BlueHeader } from 'utils/Headers/Headers';

const SecBrWrapper = styled.div`
  display: flex;
  width: 75vw;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 21.9rem;
  height: 6.6rem;
  background-image: url(${LogoW});
`;

const Line = styled.div`
  min-width: 5rem;
  margin: 0 1.5rem;
  height: 0.1rem;
  border-top: 1px solid ${({ theme }) => theme.navbarGrey};
  display: flex;
  flex-grow: 1;
`;

const SectionBreak = ({ firstTitle, secondTitle, icon }) => {
  return (
    <>
      <SecBrWrapper>
        <ArrowIcon />
        {icon ? <Icon /> : <XlHeaderBold>{firstTitle}</XlHeaderBold>}
        <Line />
        <BlueHeader>{secondTitle}</BlueHeader>
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
