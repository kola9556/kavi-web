import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logos/logoK.jpg';

const LogoKavi = styled(NavLink)`
  margin: 0 40px;
  width: 300px;
  height: 90px;
  background-image: url(${logo});
  display: block;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
`;

export default LogoKavi;
