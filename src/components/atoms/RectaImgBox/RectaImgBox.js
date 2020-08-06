import styled from 'styled-components';
import Book from 'assets/images/book.jpg';

const RectaImgBox = styled.div`
  width: 180px;
  height: 280px;
  background-image: url(${Book});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;

export default RectaImgBox;
