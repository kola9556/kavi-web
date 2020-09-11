import React from 'react';
import smallerArrow from 'assets/images/smallerArrows.jpg';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { DescriptionParagraph } from 'utils/Headers';

const NavArrowWrapper = styled.div`
  width: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ previous }) =>
    previous &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ post }) =>
    post &&
    css`
      margin-top: 10rem;
      width: 25rem;
      flex-direction: row-reverse;
    `}
`;

const ArrowsIcon = styled.div`
  width: 3.6rem;
  height: 2rem;
  background-image: url(${smallerArrow});
  background-position: 50% 50%;
  background-size: cover;

  ${({ previous }) =>
    previous &&
    css`
      transform: rotate(180deg);
    `}

  ${({ post }) =>
    post &&
    css`
      transform: rotate(180deg);
    `}
`;

const StyledDescriptionParagraph = styled(DescriptionParagraph)`
  font-weight: 700;
`;

const NavArrow = ({ children, previous, post }) => (
  <>
    <NavArrowWrapper post={post} previous={previous}>
      {post ? <ArrowsIcon post={post} /> : null}
      <StyledDescriptionParagraph>{children}</StyledDescriptionParagraph>
      <ArrowsIcon previous={previous} />
    </NavArrowWrapper>
  </>
);

NavArrow.propTypes = {
  children: PropTypes.string.isRequired,
  previous: PropTypes.bool,
  post: PropTypes.bool,
};

NavArrow.defaultProps = {
  previous: false,
  post: false,
};

export default NavArrow;
