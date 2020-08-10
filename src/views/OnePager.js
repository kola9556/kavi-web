import React from 'react';
import TopSection from 'components/organisms/Sections/TopSection/TopSection';
import LqmSection from 'components/organisms/Sections/LqmSection/LqmSection';
import AboutSection from 'components/organisms/Sections/AboutSection/AboutSection';
import HomeSection from '../components/organisms/Sections/HomeSection/HomeSection';
import Navigationbar from '../components/organisms/Navigationbar/Navigationbar';
import ConsultSection from '../components/organisms/Sections/ConsultSection/ConsultSection';
import BlogSection from '../components/organisms/Sections/BlogSection/BlogSection';
import ShopSection from '../components/organisms/Sections/ShopSection/ShopSection';
import Footer from '../components/organisms/Footer/Footer';

const OnePager = () => (
  <>
    <Navigationbar />
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
