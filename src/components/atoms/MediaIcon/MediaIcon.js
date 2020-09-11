import facebook from 'assets/images/facebookIcon.svg';
import facebookRev from 'assets/images/facebookIconRevers.svg';
import instagram from 'assets/images/instagramIcon.svg';
import instaRev from 'assets/images/instagramIconRevers.svg';
import styled, { css } from 'styled-components';

const MediaIcon = styled.a`
  margin: 1rem;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  cursor: pointer;

  ${({ footer }) =>
    footer &&
    css`
      width: 4rem;
      height: 4rem;
    `}

  ${({ insta }) =>
    insta &&
    css`
      background-image: url(${instagram});

      :hover {
        background-image: url(${instaRev});
        animation: changeInsta 0.5s;

        @keyframes changeInsta {
          from {
            background-image: url(${instagram});
          }
          to {
            background-image: url(${instaRev});
          }
        }
      }
    `}

  ${({ face }) =>
    face &&
    css`
      background-image: url(${facebook});

      :hover {
        background-image: url(${facebookRev});
        animation: changeFace 0.5s;

        @keyframes changeFace {
          from {
            background-image: url(${facebook});
          }
          to {
            background-image: url(${facebookRev});
          }
        }
      }
    `}
`;

export default MediaIcon;
