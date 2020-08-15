import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { paths } from 'utils/paths';
import { MParagraph } from 'utils/Headers/Headers';
import { MainWrapper, ColumnWrapper, RowWrapper } from 'utils/Wrappers/Wrappers';
import { ICON_NAMES } from 'utils/constans';
import logoW from 'assets/images/logoW.jpg';
import change from 'assets/images/change.jpg';
import health from 'assets/images/health.jpg';
import mind from 'assets/images/mind.jpg';
import SectionBreak from '../../../../components/molecules/SectionBreak/SectionBreak';
import DotsAndButton from '../../../../components/molecules/DotsAndButton/DotsAndButton';

const SectionWrapper = styled(RowWrapper)`
  position: relative;
  left: 30px;
  justify-content: space-between;
  width: 65vw;
  padding-bottom: 80px;
  align-items: baseline;
`;

const LqmWrapper = styled(MainWrapper)`
  padding: 20px 0px 100px 0px;
`;

const ContentWrapper = styled.div`
  padding: 50px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled(ColumnWrapper)`
  text-align: center;
  padding: 10px 0 60px 0;
`;

const IconWrapper = ColumnWrapper;

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
      case ICON_NAMES.mind:
        return css`
          background-image: url(${mind});
        `;
      case ICON_NAMES.health:
        return css`
          background-image: url(${health});
        `;
      case ICON_NAMES.change:
        return css`
          background-image: url(${change});
        `;
      case ICON_NAMES.logoW:
        return css`
          width: 219px;
          height: 66px;
          background-image: url(${logoW});
        `;
      default:
        return css`
          background-image: url(${health});
        `;
    }
  }}
`;

const Label = styled(MParagraph)`
  font-weight: 800;
`;

const icons = [
  { name: 'mind', number: 1, label: 'Pozytywny umysł', image: mind },
  { name: 'health', number: 2, label: 'Zdrowy lifestyle', image: health },
  { name: 'change', number: 3, label: 'Zmiana nawyków', image: change },
  { name: 'logoW', number: 4, label: 'Blog', image: logoW },
];

const LqmSection = ({ children }) => {
  return (
    <>
      <LqmWrapper>
        <SectionBreak firstTitle="LQM" secondTitle="Life Quality Management" />
        <ContentWrapper>
          <TextWrapper>{children}</TextWrapper>
          <SectionWrapper>
            {icons.map((icon) => (
              <IconWrapper>
                <TopWrapper>
                  <Number>{icon.number}</Number>
                  <Icon icon={icon.name} />
                </TopWrapper>
                <Label>{icon.label}</Label>
              </IconWrapper>
            ))}
          </SectionWrapper>
          <DotsAndButton activeColor="red" path={paths.lifeqm} side="right" dots="no" />
        </ContentWrapper>
      </LqmWrapper>
    </>
  );
};

LqmSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LqmSection;
