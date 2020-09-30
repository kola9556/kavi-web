import React, { Component } from 'react';
import aboutImg from 'assets/images/about.jpg';
import aboutBottom from 'assets/images/aboutBottom.jpg';
import kaviCanion from 'assets/images/kaviCanion.jpg';
import kaviHats from 'assets/images/kaviHats.jpg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import MainButton from 'components/atoms/MainButton/MainButton';
import MediaIcon from 'components/atoms/MediaIcon/MediaIcon';
import Carousel from 'components/organisms/Carousel/Carousel';
import Footer from 'components/organisms/Footer/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import Greet from 'pages/AboutMe/components/Greet';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { media } from 'utils';
import { MEDIA_TYPE, PAGE_TYPE, SCREEN_SIZES } from 'utils/constans';
import { BoldSpanS, MainText, SParagraph } from 'utils/Headers';

const pageContent = {
  mainText: {
    button: 'Konsultacje i Szkolenia',
    first: (
      <>
        Kiedyś żyłam w rzeczywistości czarnych scenariuszy, negatywnych myśłi i ciągłego narzekania.
        Nie radziłam sobie dobrze z wyzwaniami tego świata. Każda porażka urastała do rangi życiowej
        katastrofy. Widziałam świat jako wrogie miejsce, bez potencjału, bez możliwości rozwoju dla
        mnie. Nie wierzyłam w swoje siły. Zagubiłam gdzieś poczucie własnej wartości.
        <br />
        <br />
        Jednak w moim życiu nastąpił moment olśnienia. Postanowiłam dokonać{' '}
        <BoldSpanS>ZMIANY</BoldSpanS>. <br />
        Tak, aby wreszcie móc oddychać swobodnie i rozwinąć skrzydła. <br />
        Tak, by wreszcie przestać ograniczać swój rozwój. <br />
        Tak, by w końcu poczuć się wystarczająco dobra, kompetentna, skuteczna. <br />
        Tak, by zrozumieć naturę szczęścia.
      </>
    ),
    second: (
      <>
        Weszłam na drogę poszukiwań, jak dokonać <BoldSpanS>SKUTECZNEJ ZMIANY</BoldSpanS>.
        Odszukałam sposoby i tricki, by to zrobić. Długoletnie poszukiwania i badania zaowocowały
        osobistą zmianą oraz książką Autopilot Szczęścia. W końcu stalam się ekspertem ds.
        Świadomego Optymizmu. <br />
        Mam udział w <BoldSpanS> PODNOSZENIU JAKOŚCI ŻYCIA</BoldSpanS> moich klientów. Przeprowadzam
        ich skutecznie przez <BoldSpanS>PROCES ZMIANY</BoldSpanS> do
        <BoldSpanS> ZDROWEGO I AKTYWNEGO</BoldSpanS> trybu życia a przede wszystkim do
        <BoldSpanS> POZYTYWNEGO WYSYCENIA EMOCJONALNEGO UMYSŁU</BoldSpanS>. <br />W tym procesie
        dbamy o umiejętność skutecznego radzenia sobie w świecie ciągłych zmian, pozytywne i
        PROAKTYWNE podejście do życia, rozumienie emocji oraz silne i zdrowe ciało. Celem jest
        spełnienie i trwałe poczucie szczęścia. Dlatego mówimy tu o dążeniu do{' '}
        <BoldSpanS>SZCZĘŚLIWEGO TRYBU ŻYCIA</BoldSpanS>.
      </>
    ),
    third: (
      <>
        Pracuję w przekonaniu, że <BoldSpanS>ŚWIADOMY OPTYMIZM</BoldSpanS> to skuteczne narzędzie
        dla każdego, w konfrontacji z wyzwaniami dynamicznie zmieniającego się świata. Towarzyszę
        osobiście lub wirtualnie moim klientom: <BoldSpanS> INSPIRUJĘ, MODERUJĘ</BoldSpanS>i{' '}
        <BoldSpanS>PODTRZYMUJĘ</BoldSpanS> ich <BoldSpanS>PROCES ZMIAN</BoldSpanS>, aż{' '}
        <BoldSpanS>DO OSIĄGNIĘCIA</BoldSpanS> zamierzonych CELÓW. <br />
        <br />
        Zapraszam do kontaktu,
        <br /> <BoldSpanS>Kavi Kozłowska.</BoldSpanS>
      </>
    ),
  },
  lastPosts: {
    button: 'Wszystkie wpisy',
    title: 'Ostatnie posty',
    paragraph:
      '„Ważne JAK!” to dawka konkretnej wiedzy o sile osobistego wpływu na jakość życia oraz o skutecznym przeprowadzaniu życiowych zmian.',
  },
};

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

const AbMainContent = styled.div`
  margin: 0;
  padding: 15rem 0.5rem 8rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    margin: 15rem 0 15rem 0;
    padding:0;
    align-content: space-between;
  `}
`;

const AbContentHeading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  padding-bottom: 2rem;

  ${media.desktop`
    margin: 2rem 0;
    position: relative;
    right: 37rem;
    padding-bottom: 0rem;
  `}
`;

const AbGridItems = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem 3rem;

  ${media.desktop`
    margin: 0;
    grid-template-columns: 42rem 42rem;
    grid-gap: 0.5rem 1rem;
  `}
`;

const AbParagraph = styled(MainText)`
  padding: 2rem 0;
`;

const AbImage = styled.img`
  max-width: 80%;
  height: auto;
`;

const LastPostsWrapper = styled.div`
  margin: 0;
  margin-bottom: 20rem;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastPostsHeading = styled(AbContentHeading)`
  margin: 1rem 0;

  ${media.desktop`
  position: static;
  margin: 0rem 0;
  `}
`;

const LastPostsParagraph = styled.p`
  text-align: center;
  width: 80%;
  margin-bottom: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
  width: 40%;
  margin-bottom: 5rem;
  font-weight: 500;
  `}
`;

const ToBlogButton = MainButton;

const currentSize = window.screen.width;

/* Checks the size od the screen and return screen type (desktop/phone). 
Display order of images and text sections depends on this function 
*/
const handleGridDisplay = () =>
  currentSize >= SCREEN_SIZES.desktop ? MEDIA_TYPE.desktop : MEDIA_TYPE.phone;

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollTemplate>
          <Navigationbar pageType={PAGE_TYPE.about} />
          <FixedBackgroundTop img={aboutImg}>
            <Greet />
            <Medias>
              <MediaIcon
                face
                href="https://www.facebook.com/profile.php?id=1798136115"
                target="_blank"
              />
              <MediaIcon insta href="https://www.instagram.com/kavi_foodies/" target="_blank" />
            </Medias>
          </FixedBackgroundTop>
          <AbMainContent>
            <AbContentHeading>O mnie</AbContentHeading>
            <AbGridItems>
              <AbParagraph>{pageContent.mainText.first}</AbParagraph>
              <AbImage src={kaviHats} />
              {handleGridDisplay() === MEDIA_TYPE.desktop ? (
                <>
                  <AbImage src={kaviCanion} />
                  <AbParagraph>{pageContent.mainText.second}</AbParagraph>
                  <AbParagraph>{pageContent.mainText.third}</AbParagraph>
                </>
              ) : (
                <>
                  <AbParagraph>{pageContent.mainText.second}</AbParagraph>
                  <AbImage src={kaviCanion} />
                  <AbParagraph>{pageContent.mainText.third}</AbParagraph>
                </>
              )}
            </AbGridItems>
            <MainButton to="/consultation">{pageContent.mainText.button}</MainButton>
          </AbMainContent>
          <LastPostsWrapper>
            <LastPostsHeading>{pageContent.lastPosts.title}</LastPostsHeading>
            <LastPostsParagraph>{pageContent.lastPosts.paragraph}</LastPostsParagraph>
            <Carousel />
            <ToBlogButton to="/blog">{pageContent.lastPosts.button}</ToBlogButton>
          </LastPostsWrapper>
          <FixedBackgroundBottom img={aboutBottom} />
          <Footer pageType={PAGE_TYPE.about} />
        </ScrollTemplate>
      </>
    );
  }
}

export default AboutMe;
