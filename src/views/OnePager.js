import React from 'react';
import styled from 'styled-components';
import BackgroundShape from 'components/atoms/BackgroundShape/BackgroundShape';
import TopSection from 'components/organisms/TopSection/TopSection';
import Navigationbar from '../components/organisms/Navigationbar/Navigationbar';

const Wrapper = styled.div`
  width: 700px;
`;
const OnePager = () => (
  <>
    <Navigationbar />
    <BackgroundShape />
    <TopSection />
  </>
);

export default OnePager;
