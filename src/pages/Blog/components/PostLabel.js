import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';
import { SHeader } from 'utils/Headers';

const PostLabelWrapper = styled.div`
  /* Display: none - We don't have clients content for the blog, also we want to have
   some default text placement, that's why I only make it not displayed before deployment*/
  display: none;
  cursor: pointer;
  margin-bottom: 4rem;
  flex-direction: column;
  width: 28rem;
  align-items: center;
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
  background-image: url(${({ image }) => image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const PostHeading = styled(SHeader)`
  font-weight: 700;
  margin: 2rem 1rem;
  text-align: center;

  ${media.desktop`
  width: 32rem;
  `}
`;
class PostLabel extends Component {
  state = {
    redirect: false,
  };

  handlePostClick = () => this.setState({ redirect: true });

  render() {
    const { title, image, id } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/blog/post/${id}`} />;
    }

    return (
      <>
        <PostLabelWrapper onClick={this.handlePostClick}>
          <PostImage image={image} />
          <PostHeading>{title}</PostHeading>
        </PostLabelWrapper>
      </>
    );
  }
}

PostLabel.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PostLabel;
