import React from 'react';
import PropTypes from 'prop-types';
import { GraphicsWrapper } from 'components/atoms/Wrappers/Wrappers';
import Button from 'components/atoms/Button/Button';
import styled, { css } from 'styled-components';

const ThisGraphicsWrapper = styled(GraphicsWrapper)`
  align-items: flex-end;
  position: relative;
`;

const DotsWrapper = styled(GraphicsWrapper)`
  position: relative;
  right: 20px;
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

const DotsAndButton = ({ activeColor, path }) => {
  return (
    <>
      <ThisGraphicsWrapper>
        <DotsWrapper>
          <Dot activeColor={activeColor} />
          <Dot activeColor={activeColor} />
          <Dot activeColor={activeColor} />
        </DotsWrapper>
        <Button path={path} activeColor={activeColor}>
          Więcej
        </Button>
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
};

DotsAndButton.defaultProps = {
  activeColor: 'blue',
  path: '/',
};
export default DotsAndButton;
