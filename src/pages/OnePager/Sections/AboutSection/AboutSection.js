import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { paths } from 'utils/paths';
import SquareImgBox from 'components/atoms/SquareImgBox/SquareImgBox';
import ImagesBackground from 'components/atoms/ImagesBackground/ImagesBackground';
import kaviOrange from 'assets/images/kaviOrange.jpg';
import { SHeaderBold, MParagraph } from 'utils/Headers/Headers';
import { ColumnWrapper, RowWrapper, MainWrapper } from 'utils/Wrappers/Wrappers';
import SectionBreak from 'components/molecules/SectionBreak/SectionBreak';
import DotsAndButton from 'components/molecules/DotsAndButton/DotsAndButton';

const AboutWrapper = styled(MainWrapper)`
  padding: 80px 30px 80px 0px;
`;

const ContentWrapper = styled.div`
  padding: 50px 50px 50px 0px;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const AboutSHeader = styled(SHeaderBold)`
  text-align: center;
  position: relative;
  left: 120px;
`;

const AboutMParagraphUp = styled(MParagraph)`
  text-align: right;
  position: relative;
  left: 250px;
  padding-top: 40px;
`;

const AboutMParagraphDown = styled(MParagraph)`
  text-align: center;
  position: relative;
  left: 390px;
  top: 55px;
`;

const DotsAndButtonWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 250px;
`;

const AboutGraphicsWrapper = styled(RowWrapper)`
  position: relative;
  top: 20px;
`;

const BlueBackground = styled(ImagesBackground)`
  background-color: ${({ theme }) => theme.elemBlue};
  position: relative;
  right: 120px;
`;

const AboutSquareImgBox = styled(SquareImgBox)`
  width: 265px;
  height: 270px;
`;

const AboutSection = ({ paragraphDown, paragraphUp, heading }) => {
  return (
    <>
      <AboutWrapper>
        <SectionBreak firstTitle="Kavi Kozłowska" secondTitle="O mnie" />
        <ContentWrapper>
          <ColumnWrapper>
            <AboutSHeader>{heading}</AboutSHeader>
            <AboutMParagraphUp>{paragraphUp}</AboutMParagraphUp>
            <AboutMParagraphDown>{paragraphDown}</AboutMParagraphDown>
          </ColumnWrapper>
          <AboutGraphicsWrapper>
            <AboutSquareImgBox src={kaviOrange} />
            <BlueBackground />
          </AboutGraphicsWrapper>
        </ContentWrapper>
        <DotsAndButtonWrapper>
          <DotsAndButton activeColor="blue" path={paths.aboutme} side="left" />
        </DotsAndButtonWrapper>
      </AboutWrapper>
    </>
  );
};

AboutSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphUp: PropTypes.string.isRequired,
  paragraphDown: PropTypes.string.isRequired,
};

export default AboutSection;
