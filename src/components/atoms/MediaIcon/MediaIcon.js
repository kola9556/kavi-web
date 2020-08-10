import styled, { css } from 'styled-components';
import Facebook from 'assets/images/facebook.svg';
import FacebookHov from 'assets/images/facebookhoover.svg';
import InstagramHov from 'assets/images/instagramhoover.svg';
import Instagram from 'assets/images/instagram.svg';

const MediaIcon = styled.a`
  width: 3.6rem;
  height: 3.9rem;
  background-image: url(${Facebook});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 1.5rem;

  :hover {
    background-image: url(${FacebookHov});
  }

  ${({ insta }) =>
    insta &&
    css`
      width: 3.8rem;
      height: 4rem;
      background-image: url(${Instagram});

      :hover {
        background-image: url(${InstagramHov});
      }
    `}
`;

export default MediaIcon;
