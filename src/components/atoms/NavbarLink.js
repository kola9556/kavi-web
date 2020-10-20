import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavbarLink = styled(NavLink)`
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

  @media only screen and (min-width: 1200px) {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1900px) {
    padding: 0 40.8px;
  }

  @media only screen and (min-width: 2300px) {
    padding: 0 45.7px;
  }

  &.active {
    font-weight: 700;
    padding: 0 26.5px;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: white;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      display: flex;
      flex-direction: row;
      align-content: center;

      &.active {
        padding: 0 25px;
      }
    `}

    ${({ quaternary }) =>
    quaternary &&
    css`
      position: relative;
      top: 3px;
      padding: 0;
      margin-right: 0;

      &.active {
        display: none;
      }
    `}
`;

export default NavbarLink;
