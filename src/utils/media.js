import { css } from 'styled-components';
import { SCREEN_SIZES } from './constans';

export default Object.keys(SCREEN_SIZES).reduce((acc, mediaType) => {
  acc[mediaType] = (...args) => css`
    @media (min-width: ${SCREEN_SIZES[mediaType]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
