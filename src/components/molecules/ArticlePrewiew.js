import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';

const PreviewWrapper = styled(Link)`
  margin: 2rem 0;
  position: relative;
  width: 100%;
  height: 20rem;
  background-color: hsl(0, 0%, 95%);

  ${media.tablet`
    margin: 2rem 0; 
    height:32rem;
    width: 50rem;
  `}
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: rgb(38, 48, 97);
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;

  ${media.tablet`
  font-size: 2rem;
  `}
`;

const Author = styled.p`
  font-size: 1rem;
  ${media.tablet`
  font-size: 1.4rem;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticlePreview = ({ title, author, image, path }) => (
  <PreviewWrapper to={`/blog/${path}`}>
    <StyledImage src={image} />
    <PreviewInfoLabel>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ArticlePreview;
