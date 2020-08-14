import React from 'react';
import styled from 'styled-components';
import SquareImgBox from 'components/atoms/SquareImgBox/SquareImgBox';
import ImagesBackground from 'components/atoms/ImagesBackground/ImagesBackground';
import KaviOrange from 'assets/images/kaviOrange.jpg';
import { SHeaderBold, MParagraph, BoldSpan } from 'utils/Headers/Headers';
import { ColumnWrapper, RowWrapper, MainWrapper } from 'utils/Wrappers/Wrappers';
import SectionBreak from '../../../../components/molecules/SectionBreak/SectionBreak';
import DotsAndButton from '../../../../components/molecules/DotsAndButton/DotsAndButton';

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

const AboutSection = () => {
  return (
    <>
      <AboutWrapper>
        <SectionBreak firstTitle="Kavi Kozłowska" secondTitle="O mnie" />
        <ContentWrapper>
          <ColumnWrapper>
            <AboutSHeader>
              Zawodowo zajmuję się <BoldSpan>LIFE Quality Managementem (LifeQM)</BoldSpan>, <br />
              gdzie <BoldSpan>JAKOŚĆ</BoldSpan> życia jest <BoldSpan>WAŻNA</BoldSpan>. Jestem
              Trenerem Skutecznych Zmian, <br />
              autorką książek i blogerem.
            </AboutSHeader>
            <AboutMParagraphUp>
              Kiedyś żyłam w rzeczywistości czarnych <br />
              scenariuszy, negatywnych myśłi i ciągłego
              <br />
              narzekania. Nie radziłam sobie dobrze
              <br /> z wyzwaniami tego świata. Każda porażka <br />
              urastała do rangi życiowej katastrofy.
              <br />
              Widziałam świat jako wrogie miejsce, <br />
              bez potencjału, bez możliwości rozwoju <br />
              dla mnie. Nie wierzyłam w swoje siły. <br />
              Zagubiłam gdzieś poczucie własnej wartości.
            </AboutMParagraphUp>
            <AboutMParagraphDown>
              Jednak w moim życiu nastąpił moment olśnienia. <br />
              Postanowiłam dokonać ZMIANY..
            </AboutMParagraphDown>
          </ColumnWrapper>
          <AboutGraphicsWrapper>
            <AboutSquareImgBox src={KaviOrange} />
            <BlueBackground />
          </AboutGraphicsWrapper>
        </ContentWrapper>
        <DotsAndButtonWrapper>
          <DotsAndButton activeColor="blue" path="/aboutme" side="left" />
        </DotsAndButtonWrapper>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
