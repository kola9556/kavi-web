import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Book from 'assets/images/book.jpg';
import ImageBox from 'components/atoms/ImageBox/ImageBox';

const HomeWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 100px 0px 100px 150px;
`;

const GraphicsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RedBackground = styled.div`
  width: 220px;
  height: 350px;
  border-radius: 0 100px 0 100px;
  background-color: ${({ theme }) => theme.elemRed};
`;

const HomeImageBox = styled(ImageBox)`
  width: 180px;
  height: 280px;
  background-image: url(${Book});
  position: relative;
  right: 110px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: 75px;
  right: 160px;
`;

const FirstParaWrapper = styled.div`
  display: flex;
  padding-right: 120px;
  padding-bottom: 20px;
`;

const FirstParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  text-transform: uppercase;
`;

const BoldSpan = styled.span`
  font-weight: 800;
`;

const SecondParaWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const SecondParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const ThirdParaWrapper = styled.div`
  display: flex;
  padding-right: 260px;
  padding-bottom: 20px;
`;

const ThirdParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 16px;
`;

const HomeSection = () => {
  return (
    <>
      <HomeWrapper>
        <GraphicsWrapper>
          <RedBackground />
          <HomeImageBox />
        </GraphicsWrapper>
        <TextWrapper>
          <FirstParaWrapper>
            <FirstParagraph>
              Czy chcesz iść przez
              <br />
              życie <BoldSpan>pewnym krokiem?</BoldSpan>
              <br /> Czy pragniesz poczucia <br />
              <BoldSpan>sukcesu i spełnienia?</BoldSpan>
            </FirstParagraph>
          </FirstParaWrapper>
          <SecondParaWrapper>
            <SecondParagraph>
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
            </SecondParagraph>
          </SecondParaWrapper>
          <ThirdParaWrapper>
            <ThirdParagraph>
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
            </ThirdParagraph>
          </ThirdParaWrapper>
        </TextWrapper>
      </HomeWrapper>
    </>
  );
};

export default HomeSection;
