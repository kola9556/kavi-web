import styled from 'styled-components';

const RoundImage = styled.div`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1.5rem;
  background-image: url(${({ img }) => img});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30rem;
  opacity: 0.98;
`;

export default RoundImage;
