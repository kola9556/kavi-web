import styled from 'styled-components';
import KaviBlack from 'assets/images/KaviBlack.jpg';

const ImageBox = styled.div`
  width: 428px;
  height: 434px;
  background-image: url(${KaviBlack});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;

export default ImageBox;
