/* eslint-disable react/no-array-index-key */
import React from 'react';
import MainButton from 'components/atoms/MainButton/MainButton';
import Icons from 'components/molecules/Icons/Icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';
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
  children: PropTypes.element.isRequired,
};

export default LqmSection;
