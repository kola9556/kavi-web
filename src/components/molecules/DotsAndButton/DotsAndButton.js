import React from 'react';
import PropTypes from 'prop-types';
import { RowWrapper } from 'components/atoms/Wrappers/Wrappers';
import Button from 'components/atoms/Button/Button';
import styled, { css } from 'styled-components';

const ThisGraphicsWrapper = styled(RowWrapper)`
  align-items: flex-end;
  position: relative;
`;

const DotsWrapper = styled(RowWrapper)`
  padding: 0 10px;

  ${({ nodots }) =>
    nodots === 'no' &&
    css`
      display: none;
    `}
`;

const Dot = styled.span`
  height: 25px;
  width: 25px;
  margin: 0 5px 0 5px;
  background-color: ${({ theme }) => theme.buttonBlue};
  border-radius: 50%;
  display: inline-block;

  ${({ activeColor }) =>
    activeColor === 'red' &&
    css`
      background-color: ${({ theme }) => theme.buttonRed};
    `}
`;

// Side props is for displaying dots on lef or on the right side depending on the need
const DotsAndButton = ({ activeColor, path, side, dots }) => {
  return (
    <>
      <ThisGraphicsWrapper side={side}>
        {side === 'left' ? (
          <>
            <DotsWrapper nodots={dots}>
              <Dot activeColor={activeColor} />
              <Dot activeColor={activeColor} />
              <Dot activeColor={activeColor} />
            </DotsWrapper>
            <Button path={path} activeColor={activeColor}>
              Więcej
            </Button>
          </>
        ) : (
          <>
            <Button path={path} activeColor={activeColor}>
              Więcej
            </Button>
            <DotsWrapper nodots={dots}>
              <Dot activeColor={activeColor} />
              <Dot activeColor={activeColor} />
              <Dot activeColor={activeColor} />
            </DotsWrapper>
          </>
        )}
      </ThisGraphicsWrapper>
    </>
  );
};

DotsAndButton.propTypes = {
  activeColor: PropTypes.oneOf(['red', 'blue']),
  path: PropTypes.oneOf([
    '/',
    '/aboutme',
    '/lifeqm',
    '/blog',
    '/consultations',
    '/shop',
    '/contact',
  ]),
  side: PropTypes.oneOf(['left', 'right']),
  dots: PropTypes.oneOf(['yes', 'no']),
};

DotsAndButton.defaultProps = {
  activeColor: 'blue',
  path: '/',
  side: 'left',
  dots: 'yes',
};
export default DotsAndButton;
