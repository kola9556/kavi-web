import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';
import { XsHeader, DescriptionParagraph } from 'utils/Headers';
import RoundImage from 'components/atoms/RoundImage/RoundImage';
import kaviHats from 'assets/images/kaviHats.jpg';
import MediaBox from 'components/molecules/MediaBox/MediaBox';

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

const AboutMeBlock = ({ mediaHeader, header, description }) => (
  <AboutMeBlockWrapper>
    <RoundImage img={kaviHats} />
    <StyledHeader>{header}</StyledHeader>
    <StyledDescriptionParagraph>{description}</StyledDescriptionParagraph>
    <MediaHeader>{mediaHeader}</MediaHeader>
    <MediaBox />
  </AboutMeBlockWrapper>
);

AboutMeBlock.propTypes = {
  mediaHeader: PropTypes.element.isRequired,
  header: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
};

export default AboutMeBlock;
