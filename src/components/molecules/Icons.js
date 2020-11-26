/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import change from 'assets/images/change.jpg';
import health from 'assets/images/health.jpg';
import logoW from 'assets/images/logoW.jpg';
import mind from 'assets/images/mind.jpg';
import styled, { css } from 'styled-components';
import { media } from 'utils';
import { ICON_NAMES } from 'utils/constans';
import { MParagraph } from 'utils/Headers';

const GraphicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    align-items: baseline;
    left: 30px;
    width: 65vw;
    padding-bottom: 4rem;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 13rem;
  margin-bottom: 2rem;
  text-decoration: none;

  ${media.desktop`
  width: 20rem;
  margin-bottom: 0rem;
  `}
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const Number = styled.h2`
  margin: 0;
  font-size: 5.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.blueGreyText};

  ${media.desktop`
    font-size: 7.6rem;
  `}
`;

const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;

  ${media.desktop`
    width: 10rem;
    height: 10rem;
  `}

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
          width: 18rem;
          height: 5rem;
          background-image: url(${logoW});

          :hover {
            width: 19rem;
            height: 5.3rem;
          }

          ${media.desktop`
            position: relative;
            bottom: 1.5rem;
            width: 21.9rem;
            height: 6.6rem;
            :hover {
            width: 22.9rem;
            height: 7.3rem;
          }`}
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

const Icons = () => {
  return (
    <>
      <GraphicsWrapper>
        {icons.map((icon, index) =>
          icon.name === 'logoW' ? (
            <IconWrapper key={index} as={NavLink} to="/blog">
              <TopWrapper>
                <Number>{icon.number}</Number>
                <Icon icon={icon.name} />
              </TopWrapper>
              <Label>{icon.label}</Label>
            </IconWrapper>
          ) : (
            <IconWrapper key={index}>
              <TopWrapper>
                <Number>{icon.number}</Number>
                <Icon icon={icon.name} />
              </TopWrapper>
              <Label>{icon.label}</Label>
            </IconWrapper>
          ),
        )}
      </GraphicsWrapper>
    </>
  );
};

export default Icons;
