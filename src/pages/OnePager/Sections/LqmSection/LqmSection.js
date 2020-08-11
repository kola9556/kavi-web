import React from 'react';
import styled from 'styled-components';
import IconBox from 'components/molecules/IconBox/IconBox';
import { MParagraph, BoldSpan } from 'utils/Headers/Headers';
import { MainWrapper, ColumnWrapper, RowWrapper } from 'utils/Wrappers/Wrappers';
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

const BlueSpan = styled(BoldSpan)`
  color: ${({ theme }) => theme.expressiveBlue};
`;

const LqmSection = () => {
  return (
    <>
      <LqmWrapper>
        <SectionBreak firstTitle="LQM" secondTitle="Life Quality Management" />
        <ContentWrapper>
          <TextWrapper>
            <MParagraph>
              Life Quality Management – <BlueSpan>Twoje Life IQ na XXI wiek</BlueSpan>. <br />
              <br />
              W dzisiejszych czasach nie sztuką jest WIEDZIEĆ. <br />
              Trzeba <BlueSpan>WIEDZIEĆ JAK</BlueSpan> i <BlueSpan>DZIAŁAĆ</BlueSpan> według tej
              wiedzy. <br />
              <br />
              Jakość twojego życia jest wypadkową jakości twoich myśli, <br />
              emocji, relacji i działań. Wspieramy Twój rozwój, skutecznie
              <br />
              prowadząc Cię przez zmianę.
            </MParagraph>
          </TextWrapper>
          <SectionWrapper>
            <IconBox number="1" icon="mind">
              Pozytywny Umysł
            </IconBox>
            <IconBox number="2" icon="health">
              Zdrowy Lifestyle
            </IconBox>
            <IconBox number="3" icon="change">
              Zmiana Nawyków
            </IconBox>
            <IconBox number="4" icon="logoW">
              Blog
            </IconBox>
          </SectionWrapper>
          <DotsAndButton activeColor="red" path="/lifeqm" side="right" dots="no" />
        </ContentWrapper>
      </LqmWrapper>
    </>
  );
};

export default LqmSection;
