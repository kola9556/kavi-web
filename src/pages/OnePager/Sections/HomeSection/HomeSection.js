import React from 'react';
import styled, { css } from 'styled-components';
import ImagesBackground from 'components/atoms/ImagesBackground/ImagesBackground';
import RectaImgBox from 'components/atoms/RectaImgBox/RectaImgBox';
import { ColumnWrapper, RowWrapper, MainWrapper } from 'utils/Wrappers/Wrappers';
import { BoldSpan } from 'utils/Headers/Headers';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const HomeWrapper = styled(MainWrapper)`
  flex-direction: row;
  padding-left: 250px;
`;

const RedBackground = styled(ImagesBackground)`
  background-color: ${({ theme }) => theme.elemRed};
`;

const HomeRectaImgBox = styled(RectaImgBox)`
  position: relative;
  right: 110px;
`;
// Right side Wrapper which contains all text in this section
const HomeTextWrapper = styled(ColumnWrapper)`
  position: relative;
  top: 75px;
  right: 160px;
`;

// Wrapper which contains one section of the text (one box)
const ParaWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;

  ${({ first }) =>
    first &&
    css`
      padding-left: 100px;
    `}

  ${({ second }) =>
    second &&
    css`
      padding-left: 160px;
    `}
`;

const HomeParagraph = styled(Paragraph)`
margin: 0;

${({ first }) =>
  first &&
  css`
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
  `}

${({ second }) =>
  second &&
  css`
    font-size: 18px;
    font-weight: 500;
  `}

${({ third }) =>
  third &&
  css`
    font-size: 16px;
  `}
`;

const HomeSection = () => {
  return (
    <>
      <HomeWrapper>
        <RowWrapper>
          <RedBackground />
          <HomeRectaImgBox />
        </RowWrapper>
        <HomeTextWrapper>
          <ParaWrapper first>
            <HomeParagraph first>
              Czy chcesz iść przez
              <br />
              życie <BoldSpan>pewnym krokiem?</BoldSpan>
              <br /> Czy pragniesz poczucia <br />
              <BoldSpan>sukcesu i spełnienia?</BoldSpan>
            </HomeParagraph>
          </ParaWrapper>
          <ParaWrapper second>
            <HomeParagraph second>
              Żyć z <BoldSpan>lekkością i radością?</BoldSpan>
              <br />
              Czy wiesz, co składa się na <BoldSpan>jakość</BoldSpan> twojego życia? <br />
              Czy szczęście może być kwestią <BoldSpan>wyboru?</BoldSpan> <br />
              Mógłbyś przyjąć, że jakość życia w dużej mierze
              <br />
              zależy od jakości <BoldSpan>Twoich myśli?</BoldSpan>
              <br />
              <br />
              Poznaj tajniki nastawienia do życia, <br />
              które pozwalają włączyć <BoldSpan>Autopilot Szczęścia</BoldSpan>...
            </HomeParagraph>
          </ParaWrapper>
          <ParaWrapper>
            <HomeParagraph third>
              <BoldSpan>„Autopilot Szczęścia”</BoldSpan>
              <br />
              Książka wprowadza czytelnika w system
              <br />
              Świadomego Optymizmu, który pomaga
              <br />w ukształtowaniu nastawienia
              <br />
              wspierającego nas w świecie
              <br />
              dynamicznych zmian na drodze <br />
              do trwałego poczucia szczęścia. <br />
              Autopilot jest szczegółową receptą na <br />
              Szczęśliwy Styl Życia.
            </HomeParagraph>
          </ParaWrapper>
        </HomeTextWrapper>
      </HomeWrapper>
    </>
  );
};

export default HomeSection;