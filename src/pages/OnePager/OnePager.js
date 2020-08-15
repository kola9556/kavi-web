import React from 'react';
import styled from 'styled-components';
import { MParagraph, BlueSpan, BoldSpan } from 'utils/Headers/Headers';
import TopSection from 'pages/OnePager/Sections/TopSection/TopSection';
import LqmSection from 'pages/OnePager/Sections/LqmSection/LqmSection';
import AboutSection from 'pages/OnePager/Sections/AboutSection/AboutSection';
import HomeSection from './Sections/HomeSection/HomeSection';
import Navigationbar from '../../components/organisms/Navigationbar/Navigationbar';
import ConsultSection from './Sections/ConsultSection/ConsultSection';
import BlogSection from './Sections/BlogSection/BlogSection';
import ShopSection from './Sections/ShopSection/ShopSection';
import Footer from '../../components/organisms/Footer/Footer';

// Created to colored and weight a part of the text
const LogoBlack = styled.span`
  color: black;
  font-weight: 700;
`;

// Created to colored and weight a part of the text
const LogoRed = styled.span`
  color: ${({ theme }) => theme.redText};
  font-weight: 700;
`;

const pageContent = {
  top: {
    heading: (
      <>
        Szczęśliwy <br />
        Styl Życia
      </>
    ),
    paragraph: (
      <>
        Jakość jest ważna.
        <br /> <LogoBlack>WAŻNE,</LogoBlack>
        <LogoRed> JAK </LogoRed>
        przeżyjesz <br />
        swoje życie.
      </>
    ),
  },
  home: {
    firstParagraph: (
      <>
        Czy chcesz iść przez
        <br />
        życie <BoldSpan>pewnym krokiem?</BoldSpan>
        <br /> Czy pragniesz poczucia <br />
        <BoldSpan>sukcesu i spełnienia?</BoldSpan>
      </>
    ),
    secondParagraph: (
      <>
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
      </>
    ),
    thirdParagraph: (
      <>
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
      </>
    ),
  },
  about: {
    heading: (
      <>
        Zawodowo zajmuję się <BoldSpan>LIFE Quality Managementem (LifeQM)</BoldSpan>, <br />
        gdzie <BoldSpan>JAKOŚĆ</BoldSpan> życia jest <BoldSpan>WAŻNA</BoldSpan>. Jestem Trenerem
        Skutecznych Zmian, <br />
        autorką książek i blogerem.
      </>
    ),
    paragraphUp: (
      <>
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
      </>
    ),
    paragraphDown: (
      <>
        Jednak w moim życiu nastąpił moment olśnienia. <br />
        Postanowiłam dokonać ZMIANY..
      </>
    ),
  },
  lifeqm: (
    <MParagraph>
      Life Quality Management – <BlueSpan>Twoje Life IQ na XXI wiek</BlueSpan>. <br />
      <br />
      W dzisiejszych czasach nie sztuką jest WIEDZIEĆ. <br />
      Trzeba <BlueSpan>WIEDZIEĆ JAK</BlueSpan> i <BlueSpan>DZIAŁAĆ</BlueSpan> według tej wiedzy.{' '}
      <br />
      <br />
      Jakość twojego życia jest wypadkową jakości twoich myśli, <br />
      emocji, relacji i działań. Wspieramy Twój rozwój, skutecznie
      <br />
      prowadząc Cię przez zmianę.
    </MParagraph>
  ),
};

const OnePager = () => (
  <>
    <Navigationbar pageType="onePager" />
    <TopSection heading={pageContent.top.heading} paragraph={pageContent.top.paragraph} />
    <HomeSection
      firstPara={pageContent.home.firstParagraph}
      secondPara={pageContent.home.secondParagraph}
      thirdPara={pageContent.home.thirdParagraph}
    />
    <AboutSection
      heading={pageContent.about.heading}
      paragraphUp={pageContent.about.paragraphUp}
      paragraphDown={pageContent.about.paragraphDown}
    />
    <LqmSection>{pageContent.lifeqm}</LqmSection>
    <ConsultSection />
    <BlogSection />
    <ShopSection />
    <Footer />
  </>
);

export default OnePager;
