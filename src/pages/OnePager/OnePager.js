import React from 'react';
import TopSection from 'pages/OnePager/Sections/TopSection/TopSection';
import LqmSection from 'pages/OnePager/Sections/LqmSection/LqmSection';
import AboutSection from 'pages/OnePager/Sections/AboutSection/AboutSection';
import HomeSection from './Sections/HomeSection/HomeSection';
import Navigationbar from '../../components/organisms/Navigationbar/Navigationbar';
import ConsultSection from './Sections/ConsultSection/ConsultSection';
import BlogSection from './Sections/BlogSection/BlogSection';
import ShopSection from './Sections/ShopSection/ShopSection';
import Footer from '../../components/organisms/Footer/Footer';

const OnePager = () => (
  <>
    <Navigationbar pageType="onePager" />
    <TopSection />
    <HomeSection />
    <AboutSection />
    <LqmSection />
    <ConsultSection />
    <BlogSection />
    <ShopSection />
    <Footer />
  </>
);

export default OnePager;
