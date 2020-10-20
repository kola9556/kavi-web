import React from 'react';
import kaviHats from 'assets/images/kaviHats.jpg';
import RoundImage from 'components/atoms/RoundImage';
import MediaBox from 'components/molecules/MediaBox';
import styled from 'styled-components';
import { media } from 'utils';
import { DescriptionParagraph, XsHeader } from 'utils/Headers';

const aboutMeContent = {
  header: 'Kavi Kozłowska',
  description: (
    <>
      Zawodowo zajmuję się LIFE Quality Managementem (LifeQM), gdzie JAKOŚĆ życia jest WAŻNA. <br />
      Jestem trenerem skutecznej zmiany i blogerem. <br />
      Autorką książki „Autopilot Szczęścia”.
    </>
  ),
  media: 'Znajdziesz mnie na:',
};

const AboutMeBlockWrapper = styled.div`
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.desktop`
  border-left: 0.2rem solid rgb(242, 243, 245);
  padding: 2rem 5rem;
  `}
`;

const StyledHeader = styled(XsHeader)`
  margin-top: 2rem;
`;

const StyledDescriptionParagraph = styled(DescriptionParagraph)`
  margin-top: 1rem;
  max-width: 25rem;
  text-align: center;
  line-height: 160%;
`;

const MediaHeader = styled.h4`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.footerText};

  ${media.desktop`
    font-size: 1.4rem;
  `}
`;

const AboutMeBlock = () => (
  <AboutMeBlockWrapper>
    <RoundImage img={kaviHats} />
    <StyledHeader>{aboutMeContent.header}</StyledHeader>
    <StyledDescriptionParagraph>{aboutMeContent.description}</StyledDescriptionParagraph>
    <MediaHeader>{aboutMeContent.media}</MediaHeader>
    <MediaBox />
  </AboutMeBlockWrapper>
);

export default AboutMeBlock;
