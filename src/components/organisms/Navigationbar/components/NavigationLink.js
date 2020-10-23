import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

  ${({ color }) =>
    color === 'red' &&
    css`
      color: ${({ theme }) => theme.buttonTextRed};
      padding: 1rem;
      font-weight: 700;
      background-color: rgb(255, 87, 86);
      border-radius: 1rem;
    `}

  ${({ color }) =>
    color === 'grey' &&
    css`text-decoration: none;
  color: ${({ theme }) => theme.footerText};

  :visited {
    color: ${({ theme }) => theme.footerText};
  }

  :hover {
    font-weight: 700;
  `}

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
