import React from 'react';
import styled from 'styled-components';
import { blogPosts as posts } from 'content/blogContent';
import { media } from 'utils';
import { SHeader } from 'utils/Headers';
import { NavLink } from 'react-router-dom';
import kaviHats from 'assets/images/kaviHats.jpg';

const PostLabelWrapper = styled(NavLink)`
  display: flex;
  margin-bottom: 4rem;
  flex-direction: column;
  width: 28rem;
  text-decoration: none;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -1rem 0 2rem #f2f2f2;

  ${media.desktop`
  width: 38rem;
  `}
`;

const PostImage = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${kaviHats});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const PostHeading = styled(SHeader)`
  font-weight: 700;
  margin: 2rem 1rem;
  text-align: center;

  ${media.desktop`
  width: 28rem;
  `}
`;
const PostLabel = () => (
  <>
    {posts.map(
      (post) =>
        post.id === 1 && (
          <PostLabelWrapper to="/blog">
            <PostImage image={post.image} />
            <PostHeading>{post.title}</PostHeading>
          </PostLabelWrapper>
        ),
    )}
  </>
);

export default PostLabel;
