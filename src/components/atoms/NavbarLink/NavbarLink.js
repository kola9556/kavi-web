import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap');
  color: ${({ theme }) => theme.navyblueText};
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-weight: normal;
  min-width: 100px;
  text-decoration: none;
  margin: 0px;
  text-align: center;
  
  white-space: nowrap;

  @media only screen and (min-width:1200px) {
    padding: 0 30px;
  }
  
  &.active {
    font-weight: 700px;
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
