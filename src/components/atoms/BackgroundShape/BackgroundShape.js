import styled from 'styled-components';

const BlueBackgroundShape = styled.div`
  margin: 0;
  height: 85vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.elemBlue};
  border-radius: 0 0 0 130px;
`;

export default BlueBackgroundShape;
