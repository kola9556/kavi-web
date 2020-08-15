import { css } from 'styled-components';

export const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 576,
};

export default Object.keys(sizes).reduce((acc, mediaType) => {
  acc[mediaType] = (...args) => css`
    @media (min-width: ${sizes[mediaType]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
