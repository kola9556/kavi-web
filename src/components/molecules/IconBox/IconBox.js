import styled, { css } from 'styled-components';
import React from 'react';
import LogoW from 'assets/images/logoW.jpg';
import Change from 'assets/images/change.jpg';
import Health from 'assets/images/health.jpg';
import Mind from 'assets/images/mind.jpg';
import PropTypes from 'prop-types';
import { MParagraph } from 'components/atoms/Headers/Headers';
import { ColumnWrapper, RowWrapper } from 'components/atoms/Wrappers/Wrappers';

const MainWrapper = ColumnWrapper;

const TopWrapper = styled(RowWrapper)`
  align-items: baseline;
`;

const Number = styled.h2`
  margin: 0;
  font-size: 76px;
  font-weight: 800;
  color: ${({ theme }) => theme.blueGreyText};
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ icon }) => {
    switch (icon) {
      case 'mind':
        return css`
          background-image: url(${Mind});
        `;
      case 'health':
        return css`
          background-image: url(${Health});
        `;
      case 'change':
        return css`
          background-image: url(${Change});
        `;
      case 'logoW':
        return css`
          width: 219px;
          height: 66px;
          background-image: url(${LogoW});
        `;
      default:
        return css`
          background-image: url(${Health});
        `;
    }
  }}
`;

const Label = styled(MParagraph)`
  font-weight: 800;
`;

const IconBox = ({ children, number, icon }) => {
  return (
    <>
      <MainWrapper>
        <TopWrapper>
          <Number>{number}</Number>
          <Icon icon={icon} />
        </TopWrapper>
        <Label>{children}</Label>
      </MainWrapper>
    </>
  );
};

IconBox.propTypes = {
  children: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['mind', 'health', 'change', 'logoW']),
};

IconBox.defaultProps = {
  icon: 'mind',
};

export default IconBox;
