import styled from 'styled-components';
import { media } from 'utils';

const FixedBackgroundTop = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 1;
  animation: show 3s;

  ${media.desktop`
    height: 80vh;
  `}

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  // Fake background made to give the opacity only for background
  :after {
    content: '';
    background-image: url(${({ img }) => img});
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export default FixedBackgroundTop;
