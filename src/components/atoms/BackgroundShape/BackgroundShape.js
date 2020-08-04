import styled from 'styled-components';

const BackgroundShape = styled.div`
  margin: 0;
  position: relative;
  top: 76px;
  height: 1400px;
  background-color: ${({ theme }) => theme.elemBlue};
  border-radius: 0 0 0 100px;
  z-index: 3;
`;

export default BackgroundShape;
