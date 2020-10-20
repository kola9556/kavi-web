import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = styled(NavLink)`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap');
  color: ${({ theme }) => theme.navyblueText};
  font-family: 'Mulish', sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  min-width: 10rem;
  text-decoration: none;
  margin: 0px;
  text-align: center;
  white-space: nowrap;

  &.active {
    font-weight: 700;
    padding: 0 26.5px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1900px) {
    padding: 0 40.8px;
  }

  @media only screen and (min-width: 2300px) {
    padding: 0 45.7px;
  }
`;

export default NavigationLink;
