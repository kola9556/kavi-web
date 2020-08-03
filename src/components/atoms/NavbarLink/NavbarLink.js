import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');
  font-family: 'Nunito Sans';
  color: ${({ theme }) => theme.navbarGrey};
  font-size: 16px;
  font-weight: 500;
  min-width: 100px;
  text-decoration: none;
  margin: 0px;
  padding: 0 0px;
  text-align: center;
  text-transform: uppercase;
  
  
  &.active {
    font-weight: 600;
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
    `}

    ${({ quaternary }) =>
      quaternary &&
      css`
        min-width: 0;
        position: relative;
        top: 5px;
        padding-right: 20px;

        &.active {
          display: none;
        }
      `}

`;

export default NavbarLink;
