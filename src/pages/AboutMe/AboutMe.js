import React from 'react';
import styled, { css } from 'styled-components';
import AboutBottom from 'assets/images/aboutBottom.jpg';
import AboutImg from 'assets/images/about.jpg';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import Greet from 'pages/AboutMe/components/Greet';
import Footer from 'components/organisms/Footer/Footer';
import MainButton from 'components/atoms/MainButton/MainButton';
import Insta from 'assets/images/instagramIcon.svg';
import Facebook from 'assets/images/facebookIcon.svg';
import InstaRev from 'assets/images/instagramIconRevers.svg';
import FacebookRev from 'assets/images/facebookIconRevers.svg';
import { XxlHeading, MParagraph, SParagraph, BoldSpanS } from 'utils/Headers/Headers';
import KaviCanion from 'assets/images/kaviCanion.jpg';
import KaviHats from 'assets/images/kaviHats.jpg';
import Carousel from 'components/organisms/Carousel/Carousel';

const AboutMeWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GreetWrapper = styled.div`
  width: 100%;
  height: 75vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 1;
  animation: show 3s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  // Fake background made to give the opacity only for background
  :after {
    content: '';
    background-image: url(${AboutImg});
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Medias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -3.8rem;
  animation: drop 2.5s;

  @keyframes drop {
    from {
      bottom: 3rem;
    }
    to {
      bottom: -3.8rem;
    }
  }
`;

const Icon = styled.a`
  margin: 1rem;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  cursor: pointer;

  ${({ insta }) =>
    insta &&
    css`
      background-image: url(${Insta});

      :hover {
        background-image: url(${InstaRev});
        animation: changeInsta 0.5s;

        @keyframes changeInsta {
          from {
            background-image: url(${Insta});
          }
          to {
            background-image: url(${InstaRev});
          }
        }
      }
    `}

  ${({ facebook }) =>
    facebook &&
    css`
      background-image: url(${Facebook});

      :hover {
        background-image: url(${FacebookRev});
        animation: changeface 0.5s;

        @keyframes changeface {
          from {
            background-image: url(${Facebook});
          }
          to {
            background-image: url(${FacebookRev});
          }
        }
      }
    `}
`;

const AbContentWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AbMainContent = styled.div`
  margin: 15rem 0 20rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const AbContentHeading = styled(XxlHeading)`
  margin: 4rem 0;
`;

const AbGridItems = styled.div`
  display: grid;
  grid-template-columns: 42rem 42rem;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem 3rem;
`;

const AbParagraph = styled(MParagraph)`
  width: 42rem;
`;

const AbImage = styled.img`
  max-width: 80%;
  height: auto;
`;

const LastPostsWrapper = styled.div`
  margin: 0;
  margin-bottom: 30rem;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastPostsHeading = styled(AbContentHeading)`
  margin: 1rem 0;
`;

const LastPostsParagraph = styled(SParagraph)`
  width: 40%;
  margin-bottom: 8rem;
  text-align: center;
`;

const ToBlogButton = MainButton;

const BottomBackground = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 52%),
    url(${AboutBottom});
  background-position: 100% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.6;
`;

const AboutMe = () => {
  return (
    <>
      <Navigationbar pageType="about" />
      <AboutMeWrapper>
        <GreetWrapper>
          <Greet />
          <Medias>
            <Icon
              facebook
              href="https://www.facebook.com/pg/Wa%C5%BCne-JAK-104715450959726/about/?ref=page_internal"
              target="_blank"
            />
            <Icon insta href="https://www.instagram.com/kavi_foodies/" target="_blank" />
          </Medias>
        </GreetWrapper>
        <AbContentWrapper>
          <AbMainContent>
            <AbContentHeading>O mnie</AbContentHeading>
            <AbGridItems>
              <AbParagraph>
                Kiedyś żyłam w rzeczywistości czarnych scenariuszy, negatywnych myśłi i ciągłego
                narzekania. Nie radziłam sobie dobrze z wyzwaniami tego świata. Każda porażka
                urastała do rangi życiowej katastrofy. Widziałam świat jako wrogie miejsce, bez
                potencjału, bez możliwości rozwoju dla mnie. Nie wierzyłam w swoje siły. Zagubiłam
                gdzieś poczucie własnej wartości.
                <br />
                <br />
                Jednak w moim życiu nastąpił moment olśnienia. Postanowiłam dokonać{' '}
                <BoldSpanS>ZMIANY</BoldSpanS>. <br />
                Tak, aby wreszcie móc oddychać swobodnie i rozwinąć skrzydła. <br />
                Tak, by wreszcie przestać ograniczać swój rozwój. <br />
                Tak, by w końcu poczuć się wystarczająco dobra, kompetentna, skuteczna. <br />
                Tak, by zrozumieć naturę szczęścia.
              </AbParagraph>
              <AbImage src={KaviHats} />
              <AbImage src={KaviCanion} />
              <AbParagraph>
                Weszłam na drogę poszukiwań, jak dokonać <BoldSpanS>SKUTECZNEJ ZMIANY</BoldSpanS>.
                Odszukałam sposoby i tricki, by to zrobić. Długoletnie poszukiwania i badania
                zaowocowały osobistą zmianą oraz książką Autopilot Szczęścia. W końcu stalam się
                ekspertem ds. Świadomego Optymizmu. <br />
                Mam udział w <BoldSpanS> PODNOSZENIU JAKOŚCI ŻYCIA</BoldSpanS> moich klientów.
                Przeprowadzam ich skutecznie przez <BoldSpanS>PROCES ZMIANY</BoldSpanS> do
                <BoldSpanS> ZDROWEGO I AKTYWNEGO</BoldSpanS> trybu życia a przede wszystkim do
                <BoldSpanS> POZYTYWNEGO WYSYCENIA EMOCJONALNEGO UMYSŁU</BoldSpanS>. <br />W tym
                procesie dbamy o umiejętność skutecznego radzenia sobie w świecie ciągłych zmian,
                pozytywne i PROAKTYWNE podejście do życia, rozumienie emocji oraz silne i zdrowe
                ciało. Celem jest spełnienie i trwałe poczucie szczęścia. Dlatego mówimy tu o
                dążeniu do <BoldSpanS>SZCZĘŚLIWEGO TRYBU ŻYCIA</BoldSpanS>.
              </AbParagraph>
              <AbParagraph>
                Pracuję w przekonaniu, że <BoldSpanS>ŚWIADOMY OPTYMIZM</BoldSpanS> to skuteczne
                narzędzie dla każdego, w konfrontacji z wyzwaniami dynamicznie zmieniającego się
                świata. Towarzyszę osobiście lub wirtualnie moim klientom:{' '}
                <BoldSpanS> INSPIRUJĘ, MODERUJĘ</BoldSpanS>i <BoldSpanS>PODTRZYMUJĘ</BoldSpanS> ich{' '}
                <BoldSpanS>PROCES ZMIAN</BoldSpanS>, aż <BoldSpanS>DO OSIĄGNIĘCIA</BoldSpanS>{' '}
                zamierzonych CELÓW. <br />
                <br />
                <SParagraph>
                  Zapraszam do kontaktu,
                  <br /> <BoldSpanS>Kavi Kozłowska.</BoldSpanS>
                </SParagraph>
              </AbParagraph>
            </AbGridItems>
            <MainButton to="/consultation">Konsultacje i Szkolenia</MainButton>
          </AbMainContent>
          <LastPostsWrapper>
            <LastPostsHeading>Ostatnie posty</LastPostsHeading>
            <LastPostsParagraph>
              „Ważne JAK!” to dawka konkretnej wiedzy o sile osobistego wpływu na jakość życia oraz
              o skutecznym przeprowadzaniu życiowych zmian.
            </LastPostsParagraph>
            <Carousel />
            <ToBlogButton to="/blog">Wszystkie wpisy</ToBlogButton>
          </LastPostsWrapper>
          <BottomBackground />
        </AbContentWrapper>
        <Footer about="true" />
      </AboutMeWrapper>
    </>
  );
};
export default AboutMe;
