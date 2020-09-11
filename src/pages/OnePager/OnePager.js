import React, { Component } from 'react';
import AboutSection from 'pages/OnePager/Sections/AboutSection/AboutSection';
import LqmSection from 'pages/OnePager/Sections/LqmSection/LqmSection';
import TopSection from 'pages/OnePager/Sections/TopSection/TopSection';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { PAGE_TYPE } from 'utils/constans';
import { BlueSpan, BoldSpan, MParagraph } from 'utils/Headers';

import Footer from '../../components/organisms/Footer/Footer';
import Navigationbar from '../../components/organisms/Navigationbar/Navigationbar';
import BlogSection from './Sections/BlogSection/BlogSection';
import ConsultSection from './Sections/ConsultSection/ConsultSection';
import HomeSection from './Sections/HomeSection/HomeSection';
import ShopSection from './Sections/ShopSection/ShopSection';

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
        Chcesz iść przez
        <br />
        życie <BoldSpan>pewnym krokiem?</BoldSpan>
        <br /> Pragniesz poczucia <br />
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
  consultation: [
    {
      type: 'individual',
      label: 'Life QM indywidualnie',
      texts: [
        { text: 'Konsultacje indywidualne' },
        { text: 'Life Energy Activator' },
        { text: 'Grupy Moderujące Zmianę' },
      ],
    },
    {
      type: 'firm',
      label: 'Life QM dla firm',
      texts: [{ text: 'Audty Happy Management' }, { text: 'Szkolenia dedykowane' }],
    },
  ],
  blog: {
    redText: (
      <>
        „Ważne JAK!” to dawka konkretnej wiedzy <br />o sile osobistego wpływu na jakość życia oraz
        o skutecznym <br /> przeprowadzaniu życiowych zmian.
      </>
    ),
    listPoints: [
      { text: 'pozbyć się niesprzyjających nawyków i kompulsywnych zachowań' },
      { text: 'uformować pozytywne podejścia do rzeczywistości' },
      { text: 'podnieść efektywność osobistą' },
      {
        text: 'osiągać cele, zdobywać marzenia, wykorzystać proste sposoby na trudne wyzwania',
      },
      {
        text:
          'stworzyć osobiste rytuały dla zdrowia i piękna, poznać styl żywienia "80/20" sprzyjający zdrowiu i dobremu sapomoczuciu',
      },
    ],
  },
};

const { top, home, about, lifeqm, consultation, blog } = pageContent;

class OnePager extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollTemplate>
          <Navigationbar pageType="onePager" />
          <TopSection heading={top.heading} paragraph={top.paragraph} />
          <HomeSection
            firstPara={home.firstParagraph}
            secondPara={home.secondParagraph}
            thirdPara={home.thirdParagraph}
          />
          <AboutSection
            heading={about.heading}
            paragraphUp={about.paragraphUp}
            paragraphDown={about.paragraphDown}
          />
          <LqmSection>{lifeqm}</LqmSection>
          <ConsultSection content={consultation} />
          <BlogSection redText={blog.redText} listPoints={blog.listPoints} />
          <ShopSection />
          <Footer pageType={PAGE_TYPE.main} />
        </ScrollTemplate>
      </>
    );
  }
}
export default OnePager;
