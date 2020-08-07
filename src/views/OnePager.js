import React from 'react';
import TopSection from 'components/organisms/TopSection/TopSection';
import LqmSection from 'components/organisms/LqmSection/LqmSection';
import AboutSection from 'components/organisms/AboutSection/AboutSection';
import HomeSection from '../components/organisms/HomeSection/HomeSection';
import Navigationbar from '../components/organisms/Navigationbar/Navigationbar';
import ConsultSection from '../components/organisms/ConsultSection/ConsultSection';

const OnePager = () => (
  <>
    <Navigationbar />
    <TopSection />
    <HomeSection />
    <AboutSection />
    <LqmSection />
    <ConsultSection />
  </>
);

export default OnePager;
