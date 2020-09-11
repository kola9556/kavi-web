import React, { Component } from 'react';
import { media } from 'utils';
import topLife from 'assets/images/topLife.jpg';
import lifeBottom from 'assets/images/lifeBottom.jpg';
import lifeGrid1 from 'assets/images/lifeGrid1.jpg';
import lifeGrid2 from 'assets/images/lifeGrid2.jpg';
import lifeGrid3 from 'assets/images/lifeGrid3.jpg';
import lifeActivator from 'assets/images/lifeActivator.jpg';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import styled from 'styled-components';
import { MainHeading, PostscriptHeading, MainText } from 'utils/Headers';
import ScrollTemplate from 'templates/ScrollTemplate';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import Footer from 'components/organisms/Footer/Footer';
import Icons from 'components/molecules/Icons/Icons';

const StyledBackgroundTop = styled(FixedBackgroundTop)`
  ${media.desktop`
    height: 60vh;
  `}

  :after {
    opacity: 0.8;
  }
`;

const ColoredTextBackground = styled.div`
  padding: 4rem;
  background-color: white;
  opacity: 0.7;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem 0 8rem;
  justify-content: center;
`;

const GridWrapper = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  align-content: center;
  justify-items: center;
  grid-gap: 2rem 3rem;

  ${media.desktop`
    margin: 0;
    grid-template-columns: 62rem 62rem;
    grid-gap: 6rem 3rem;
  `}
`;

const StyledImage = styled.img`
  max-width: 80%;
  height: auto;
`;

const Text = styled(MainText)``;

const MiddleText = styled(MainText)`
  max-width: 80rem;
  margin: 12rem 0 20rem;
  text-align: center;
`;
const BottomText = styled(MainText)`
  margin-bottom: 10rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const DecoratedText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: rgb(142, 203, 208);
`;

const ActiveImage = styled.div`
  margin: 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 50vh;
  opacity: 0.7;
  background-image: url(${({ img }) => img});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ActivatorHeading = styled(MainHeading)`
  margin-bottom: 4rem;
`;

const PostscriptActivator = styled(PostscriptHeading)`
  margin-bottom: 2rem;
`;

const StyledBackgroundBottom = styled(FixedBackgroundBottom)`
  height: 50vh;
`;

const LifeQm = () => {
  return (
    <>
      <ScrollTemplate>
        <Navigationbar />
        <StyledBackgroundTop img={topLife}>
          <ColoredTextBackground>
            <MainHeading>Life Quality Management</MainHeading>
            <PostscriptHeading>Twoje życiowe IQ na XXI wiek.</PostscriptHeading>
          </ColoredTextBackground>
        </StyledBackgroundTop>
        <MainWrapper>
          <ContentWraper>
            <GridWrapper>
              <StyledImage src={lifeGrid1} />
              <Text>
                Systemy zarezerwowane dla gigantów przedsiębiorczości są dziś osiągalne dla osób,
                które pragną żyć świadomym, szczęśliwym życiem.
              </Text>
              <Text>
                Life QM to system pozytywnej zmiany, wewnętrznej przebudowy przekonań i nawyków dla
                podniesienia jakości życia. Celem jest efektywność w osiąganiu osobistego sukcesu i
                zadowolenie w każdym aspekcie życia.
                <br />
                <br /> Pragniesz szczęścia, pełnej realizacji własnego potencjału oraz
                satysfakcjonującego poczucia, że twoje życie jest dobre i wartościowe?
              </Text>
              <StyledImage src={lifeGrid2} />
              <StyledImage src={lifeGrid3} />
              <Text>
                Jakość twojego życia jest wypadkową jakości twoich MYŚLI, SŁÓW, EMOCJI, RELACJI i
                DZIAŁAŃ. Skupiamy się właśnie na tych obszarach. Life QM INSPIRUJE I WSPIERA Twoją
                ZMIANĘ, skutecznie prowadząc Cię od negatywizmu do ŚWIADOMEGO OPTYMIZMU. Cel:
                osiągnięcie efektywnego szczęścia i osobistego sukcesu.
              </Text>
            </GridWrapper>
          </ContentWraper>
          <MiddleText>
            Czy to brzmi dla Ciebie zbyt pięknie?
            <br /> Rzeczywiście, istnieje dodatkowy warunek determinujący efektywność tego systemu.{' '}
            <br />
            Life QM nie jest rozwiązaniem dla każdego. Naszą współpracę rozpoczniemy tylko wtedy,
            jeżeli naprawdę czujesz SILNĄ POTRZEBĘ ZMIANY i masz odwagę, by podjąć wyzwanie
            przebudowy twoich codziennych nawyków prowadzące do Szczęśliwego Stylu Życia.
            <br /> Jeśli tak zacznij od Life Energy Activator. <br />
            <br />
            <DecoratedText>Następna edycja LEA już 04.10.2020</DecoratedText> . Może to właśnie
            twoja SZANSA.
          </MiddleText>
          <BottomText>
            Żyjemy w dynamicznie zmiennym świecie. <br />
            <br />
            Dziś nie sztuką jest WIEDZIEĆ. <br />
            <br />
            Warto WIEDZIEĆ JAK i konsekwentnie DZIAŁAĆ według tej wiedzy.
          </BottomText>
          <Icons />

          <ActiveImage img={lifeActivator}>
            <ColoredTextBackground>
              <ActivatorHeading>Life Energy Activator</ActivatorHeading>
              <PostscriptActivator>Z nami dowiesz się JAK.</PostscriptActivator>
              <PostscriptActivator>
                Z nami wreszcie podejmiesz i utrzymasz DZIAŁANIE.
              </PostscriptActivator>
              <PostscriptActivator>
                Z nami osiągniesz swój CEL: SZCZĘSLIWY STYL ŻYCIA
              </PostscriptActivator>
            </ColoredTextBackground>
          </ActiveImage>
        </MainWrapper>
        <StyledBackgroundBottom img={lifeBottom} />
        <Footer />
      </ScrollTemplate>
    </>
  );
};

export default LifeQm;
