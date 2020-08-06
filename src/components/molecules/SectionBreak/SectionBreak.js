import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowIcon from 'components/atoms/ArrowIcon/ArrowIcon';
import { FHeaderBold, BlueHeader } from 'components/atoms/Headers/Headers';

const SecBrWrapper = styled.div`
  display: flex;
  width: 75vw;
  flex-direction: row;
  align-items: center;
`;

const Line = styled.div`
  min-width: 50px;
  margin: 0 15px;
  height: 1px;
  border-top: 1px solid ${({ theme }) => theme.navbarGrey};
  display: flex;
  flex-grow: 1;
`;

const SectionBreak = ({ firstTitle, secondTitle }) => {
  return (
    <>
      <SecBrWrapper>
        <ArrowIcon />
        <FHeaderBold>{firstTitle}</FHeaderBold>
        <Line />
        <BlueHeader>{secondTitle}</BlueHeader>
      </SecBrWrapper>
    </>
  );
};

SectionBreak.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
};

export default SectionBreak;
