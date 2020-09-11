/* eslint-disable react/no-array-index-key */
import React from 'react';
import change from 'assets/images/change.jpg';
import health from 'assets/images/health.jpg';
import logoW from 'assets/images/logoW.jpg';
import mind from 'assets/images/mind.jpg';
import Icons from 'components/molecules/Icons/Icons';
import MainButton from 'components/atoms/MainButton/MainButton';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils';
import { ICON_NAMES } from 'utils/constans';
import { MParagraph } from 'utils/Headers';
import { paths } from 'utils/paths';
import SectionBreak from '../../../../components/molecules/SectionBreak/SectionBreak';

const LqmWrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0px 10rem 0px;

  ${media.desktop`
    margin-top: 0rem;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  padding: 4rem 0 4rem 0;
  margin: 2rem 2rem 0;

  ${media.desktop`
    margin: 0;
  `}
`;

const LqmSection = ({ children }) => {
  return (
    <>
      <LqmWrapper>
        <SectionBreak firstTitle="LQM" secondTitle="Life Quality Management" />
        <TextWrapper>{children}</TextWrapper>
        <Icons />
        <MainButton to={paths.lifeqm}>Więcej</MainButton>
      </LqmWrapper>
    </>
  );
};

LqmSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LqmSection;
