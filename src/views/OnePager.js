import React from 'react';
import TopSection from 'components/organisms/TopSection/TopSection';
import AboutSection from 'components/organisms/AboutSection/AboutSection';
import HomeSection from '../components/organisms/HomeSection/HomeSection';
import Navigationbar from '../components/organisms/Navigationbar/Navigationbar';

const OnePager = () => (
  <>
    <Navigationbar />
    <TopSection />
    <HomeSection />
    <AboutSection />
  </>
);

export default OnePager;
