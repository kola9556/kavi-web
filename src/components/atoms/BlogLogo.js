import { NavLink } from 'react-router-dom';
import logoBlog from 'assets/logos/WazneJak.jpg';
import styled from 'styled-components';

const BlogLogo = styled(NavLink)`
  width: 100px;
  height: 27px;
  background-image: url(${logoBlog});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
`;

export default BlogLogo;
