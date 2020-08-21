import styled from 'styled-components';

const FixedBackgroundBottom = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80vh;
  background-image: url(${({ img }) => img});
  background-position: 100% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.6;
`;

export default FixedBackgroundBottom;
