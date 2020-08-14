import React from 'react';
import { MParagraph, BlueSpan } from 'utils/Headers/Headers';
import TopSection from 'pages/OnePager/Sections/TopSection/TopSection';
import LqmSection from 'pages/OnePager/Sections/LqmSection/LqmSection';
import AboutSection from 'pages/OnePager/Sections/AboutSection/AboutSection';
import HomeSection from './Sections/HomeSection/HomeSection';
import Navigationbar from '../../components/organisms/Navigationbar/Navigationbar';
import ConsultSection from './Sections/ConsultSection/ConsultSection';
import BlogSection from './Sections/BlogSection/BlogSection';
import ShopSection from './Sections/ShopSection/ShopSection';
import Footer from '../../components/organisms/Footer/Footer';

const pageContent = {
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
    <TopSection />
    <HomeSection />
    <AboutSection />
    <LqmSection>{pageContent.lifeqm}</LqmSection>
    <ConsultSection />
    <BlogSection />
    <ShopSection />
    <Footer />
  </>
);

export default OnePager;
