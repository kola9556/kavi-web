import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import { MainHeading, DescriptionParagraph, MainText } from 'utils/Headers';
import { blogPosts as posts } from 'content/blogContent';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import NavArrow from 'pages/Blog/components/NavArrow';
import postTop from 'assets/images/postTop.jpg';
import postBottom from 'assets/images/postBottom.jpg';
import blogPostMain from 'assets/images/blogPostMain.jpg';
import blogPost1 from 'assets/images/blogPost1.jpg';
import blogPost2 from 'assets/images/blogPost2.jpg';
import blogPost3 from 'assets/images/blogPost3.jpg';
import Footer from 'components/organisms/Footer/Footer';
import ScrollTemplate from 'templates/ScrollTemplate';

const StyledFixedBackgroundTop = styled(FixedBackgroundTop)`
  height: 50vh;
  :after {
    opacity: 0.7;
  }

  ${media.desktop`
    height: 60vh;
  `}
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 1rem;

  ${media.desktop`
    margin: 15rem 30rem 40rem;
  `}
`;

const Date = styled(DescriptionParagraph)`
  font-weight: 300;
  margin-bottom: 4rem;

  ${media.desktop`
    font-size: 1.8rem;
  `}
`;

const PostHeading = styled(MainHeading)`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainImage = styled.div`
  width: 30rem;
  height: 20rem;
  margin-bottom: 6rem;
  background-image: url(${({ mainImage }) => mainImage});
  background-size: cover;
  background-position: 50% 50%;

  ${media.desktop`
  width: 105rem;
  height: 60rem;
  margin: 5rem 0 8rem;
  `}
`;

const Content = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Next = styled(NavArrow)``;

const StyledFixedBackgroundBottom = styled(FixedBackgroundBottom)`
  height: 50vh;
  margin-top: 20rem;
  opacity: 0.7;
`;

class Post extends Component {
  state = {};

  render() {
    const currentPath = window.location.pathname;
    return (
      <>
        <ScrollTemplate>
          <Navigationbar />
          <StyledFixedBackgroundTop img={postTop}>
            {posts.map(
              (post) =>
                `/blog/post/${post.id}` === currentPath && <PostHeading>{post.title}</PostHeading>,
            )}
          </StyledFixedBackgroundTop>
          <PostWrapper>
            {posts.map(
              (post) =>
                `/blog/post/${post.id}` === currentPath && (
                  <>
                    <Date>{post.date}</Date>
                    <MainImage mainImage={post.mainImage} />
                    <Content>
                      {post.text}
                      <Next post>Zobaczy kolejny post</Next>
                    </Content>
                  </>
                ),
            )}
          </PostWrapper>
          <StyledFixedBackgroundBottom img={postBottom} />
          <Footer />
        </ScrollTemplate>
      </>
    );
  }
}

export default Post;
