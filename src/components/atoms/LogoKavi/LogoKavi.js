import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logos/logoK.jpg';

const LogoKavi = styled(NavLink)`
  margin: 10px 0px 0;
  min-width: 290px;
  height: 56px;
  background-image: url(${logo});
  display: block;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
`;

export default LogoKavi;
