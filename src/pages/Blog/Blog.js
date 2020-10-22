/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import blogBottom from 'assets/images/blogBottom.jpg';
import blogTop from 'assets/images/blogTop.jpg';
import blogTopMobile from 'assets/images/blogTopMobile.jpg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop';
import AboutMeBlock from 'components/molecules/AboutMeBlock';
import ArticlePreview from 'components/molecules/ArticlePrewiew';
import Footer from 'components/organisms/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import { blogPosts as posts } from 'content/blogContent';
import { useQuery } from 'graphql-hooks';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { media } from 'utils';
import { SecondHeading } from 'utils/Headers';

import NavArrow from './components/NavArrow';
import PostLabel from './components/PostLabel';

const slugify = require('slugify');

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 12rem 0;

  ${media.desktop`
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  `}
`;

const StyledFixedBackgroundBottom = styled(FixedBackgroundBottom)`
  height: 50vh;
  opacity: 0.9;
`;
const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  ${media.tablet`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap:2rem; 
  `}
`;

const HOMEPAGE_QUERY = `query HomePage {
  allArticles {
    author
    title
    id
    mainImage {
      url
    }
  }
}`;

const Blog = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

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
            <ArticlesWrapper>
              {data.allArticles.reverse().map(({ title, mainImage, author, id }) => (
                <ArticlePreview
                  key={slugify(title, { lower: true })}
                  id={id}
                  title={title}
                  author={author}
                  image={mainImage.url}
                  path={slugify(title, { lower: true })}
                />
              ))}
            </ArticlesWrapper>
            <AboutMeBlock />
          </BlogContentWrapper>
          <StyledFixedBackgroundBottom img={blogBottom} />
          <Footer />
        </>
      </ScrollTemplate>
    </>
  );
};
export default Blog;
