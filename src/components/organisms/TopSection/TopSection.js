import React from 'react';
import styled from 'styled-components';
import ImageBox from 'components/atoms/ImageBox/ImageBox';

const TopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: -90px;
  padding: 30px 320px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: space-between;
  align-items: center;
`;

const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopHeader = styled.h1`
  color: ${({ theme }) => theme.redText};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 60px;
  margin: 0;
  text-shadow: 2px 2px 2px #c1c1c1;
`;

const TopParagraph = styled.p`
  color: ${({ theme }) => theme.navyblueText};
  font-size: 30px;
  padding-left: 50px;
`;

const TopSection = () => (
  <>
    <TopWrapper>
      <TopTextWrapper>
        <TopHeader>
          Szczęśliwy <br />
          Styl Życia
        </TopHeader>
        <TopParagraph>
          Jakość jest ważna,
          <br /> bo to WAŻNE, JAK
          <br /> przeżyjesz swoje życie.
        </TopParagraph>
      </TopTextWrapper>

      <ImageBox />
    </TopWrapper>
  </>
);

export default TopSection;
