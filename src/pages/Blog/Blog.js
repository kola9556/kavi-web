/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import blogBottom from 'assets/images/blogBottom.jpg';
import blogTop from 'assets/images/blogTop.jpg';
import blogTopMobile from 'assets/images/blogTopMobile.jpg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import AboutMeBlock from 'components/molecules/AboutMeBlock/AboutMeBlock';
import Footer from 'components/organisms/Footer/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import { blogPosts as posts } from 'content/blogContent';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { media } from 'utils';
import { SecondHeading } from 'utils/Headers';

import NavArrow from './components/NavArrow';
import PostLabel from './components/PostLabel';

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
  /* There are only few blog posts and for now no logic for how much blog post 
should display and how Next/Previous buttons should handle this - so display: none */
  display: none;
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

class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollTemplate>
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
                {posts.map((post, index) => (
                  <PostLabel key={index} image={post.mainImage} title={post.title} id={post.id} />
                ))}
              </PostLabelsWrapper>
              <AboutMeBlockWrapper>
                <AboutMeBlock />
              </AboutMeBlockWrapper>
            </BlogContentWrapper>
            <NavArrowsWrapper>
              <NavArrow previous>Poprzedni</NavArrow>
              <NavArrow>Następny</NavArrow>
            </NavArrowsWrapper>
            <StyledFixedBackgroundBottom img={blogBottom} />
            <Footer />
          </>
        </ScrollTemplate>
      </>
    );
  }
}
export default Blog;
