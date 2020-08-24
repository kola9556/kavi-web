import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { DescriptionParagraph } from 'utils/Headers';
import smallerArrow from 'assets/images/smallerArrows.jpg';

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
`;

const StyledDescriptionParagraph = styled(DescriptionParagraph)`
  font-weight: 700;
`;

const NavArrow = ({ children, previous }) => (
  <>
    <NavArrowWrapper previous={previous}>
      <StyledDescriptionParagraph>{children}</StyledDescriptionParagraph>
      <ArrowsIcon previous={previous} />
    </NavArrowWrapper>
  </>
);

NavArrow.propTypes = {
  children: PropTypes.string.isRequired,
  previous: PropTypes.bool,
};

NavArrow.defaultProps = {
  previous: false,
};

export default NavArrow;
