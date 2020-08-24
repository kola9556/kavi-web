import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import { SecondHeading } from 'utils/Headers';
import AboutMeBlock from 'components/molecules/AboutMeBlock/AboutMeBlock';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import blogTop from 'assets/images/blogTop.jpg';
import blogTopMobile from 'assets/images/blogTopMobile.jpg';
import blogBottom from 'assets/images/blogBottom.jpg';
import Footer from 'components/organisms/Footer/Footer';
import PostLabel from './components/PostLabel';
import NavArrow from './components/NavArrow';

const StyledFixedBackground = styled(FixedBackgroundTop)`
  :after {
    opacity: 1;
    background-position: 60% 50%;
    background-attachment: scroll;
  }

  ${media.desktop`
    height: 60vh;
    
    :after {
    opacity: 1;
    background-position: 50% 50%;
    background-image: url(${blogTop});
    background-attachment: fixed;
  }
  `}
`;

const TopBackgroundTextWrapper = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 6rem;
  bottom: 7rem;

  ${media.desktop`
  width: 35rem;
  left: 23rem;
  bottom: 4rem;
  `}
`;

const StyledSecondHeading = styled(SecondHeading)`
  margin-bottom: 1.2rem;

  ${media.desktop`
  margin-bottom: 2rem;
  `}
`;

const BlogContentWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  ${media.desktop`
  margin: 23rem 0 0;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  `}
`;

const PostLabelsWrapper = styled.div`
  margin: 20rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  ${media.desktop`
    margin: 0rem 10rem;
    display: grid;
    grid-template-columns: 38rem 38rem;
    grid-gap: 0.5rem 2rem;
  `}
`;

const AboutMeBlockWrapper = styled.div`
  display: none;

  ${media.desktop`
  display: flex;
`}
`;

const NavArrowsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  ${media.desktop`
    width: 120rem;
  `}
`;

const StyledFixedBackgroundBottom = styled(FixedBackgroundBottom)`
  height: 50vh;
  margin-top: 25rem;
  opacity: 0.9;
`;

const pageContent = {
  header: 'Napisz do mnie!',
  postscript: 'Z przyjemnością odpowiem na Twoje pytania',
  mailHeader: 'Adres mailowy:',
  mail: 'kavikozlowska@gmail.com',
  corespondingHeader: 'Adres korespondencyjny:',
  adress: 'Al. Iberyjska 10/2 (Ogrody Tesoro) 81-198 Pogórze k. Gdyni',
  phoneHeader: 'Telefon:',
  phone: '658 984 125',
  aboutMeBlock: {
    header: 'Kavi Kozłowska',
    description: (
      <>
        Zawodowo zajmuję się LIFE Quality Managementem (LifeQM), gdzie JAKOŚĆ życia jest WAŻNA.{' '}
        <br />
        Jestem trenerem skutecznej zmiany i blogerem. <br />
        Autorką książki „Autopilot Szczęścia”.
      </>
    ),
    media: 'Znajdziesz mnie na:',
  },
};

const Blog = () => (
  <>
    <Navigationbar />
    <StyledFixedBackground img={blogTopMobile}>
      <TopBackgroundTextWrapper>
        <StyledSecondHeading>Blog o szczęśliwym stylu życiu...</StyledSecondHeading>
        <StyledSecondHeading>Blog dla życia świadomie zarządzanego...</StyledSecondHeading>
        <StyledSecondHeading>Blog o życiu z sensem...</StyledSecondHeading>
      </TopBackgroundTextWrapper>
    </StyledFixedBackground>
    <BlogContentWrapper>
      <PostLabelsWrapper>
        <PostLabel />
        <PostLabel />
        <PostLabel />
        <PostLabel />
        <PostLabel />
        <PostLabel />
      </PostLabelsWrapper>
      <AboutMeBlockWrapper>
        <AboutMeBlock
          mediaHeader={pageContent.aboutMeBlock.media}
          header={pageContent.aboutMeBlock.header}
          description={pageContent.aboutMeBlock.description}
        />
      </AboutMeBlockWrapper>
    </BlogContentWrapper>
    <NavArrowsWrapper>
      <NavArrow previous>Poprzedni</NavArrow>
      <NavArrow>Następny</NavArrow>
    </NavArrowsWrapper>
    <StyledFixedBackgroundBottom img={blogBottom} />
    <Footer />
  </>
);

export default Blog;
