import arrows from 'assets/images/arrows.jpg';
import styled from 'styled-components';
import { media } from 'utils';

const ArrowIcon = styled.div`
  width: 41px;
  height: 28px;
  background-image: url(${arrows});
  background-position: 50% 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  ${media.desktop`
    width: 61px;
    height: 34px;
    background-size: 90%;
  `}
`;

export default ArrowIcon;
