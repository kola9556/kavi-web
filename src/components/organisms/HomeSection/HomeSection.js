import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const HomeWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 200px 250px 100px 50px;
`;

const FirstParaWrapper = styled.div`
  display: flex;
  padding-right: 180px;
  padding-bottom: 20px;
`;

const FirstParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
`;

const SecondParaWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const SecondParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 18px;
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
        <FirstParaWrapper>
          <FirstParagraph>
            Czy chcesz iść przez
            <br />
            życie pewnym krokiem?
            <br /> Czy pragniesz poczucia <br />
            sukcesu i spełnienia?
          </FirstParagraph>
        </FirstParaWrapper>
        <SecondParaWrapper>
          <SecondParagraph>
            Żyć z lekkością i radością?
            <br />
            Czy wiesz, co składa się na jakość twojego życia? <br />
            Czy szczęście może być kwestią wyboru? <br />
            Mógłbyś przyjąć, że jakość życia w dużej mierze
            <br />
            zależy od jakości Twoich myśli?
            <br />
            <br />
            Poznaj tajniki nastawienia do życia, <br />
            które pozwalają włączyć Autopilot Szczęścia...
          </SecondParagraph>
        </SecondParaWrapper>
        <ThirdParaWrapper>
          <ThirdParagraph>
            „Autopilot Szczęścia”
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
      </HomeWrapper>
    </>
  );
};

export default HomeSection;
