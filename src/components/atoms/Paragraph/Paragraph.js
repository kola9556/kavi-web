import styled from 'styled-components';

const Paragraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');
  font-family: 'Nunito Sans';
  color: ${({ theme }) => theme.navbarGrey};
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export default Paragraph;
