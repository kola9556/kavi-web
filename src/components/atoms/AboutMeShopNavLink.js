import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'utils/media';

const Button = styled(NavLink)`
  margin: 2rem 0;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.lightBlueText};
  text-decoration: none;
  display: block;
  width: 15rem;

  ${media.desktop`
  width: 25rem;

  `}

  :hover {
    animation: changecolor 1s;
    background-color: transparent;

    @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.lightBlueText};
      }
      to {
        background-color: transparent;
      }
    }
  }
`;

const ButtonParagraph = styled.p`
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 0;
  font-size: 1.4rem;

  ${media.desktop`
    padding: 1rem 2rem;
    font-size: 1.6rem;
  `}

  :hover {
    animation: changecolor 1s;
    background-color: transparent;
    color: ${({ theme }) => theme.lightBlueText};

    @keyframes changecolor {
      from {
        background-color: ${({ theme }) => theme.lightBlueText};
        color: ${({ theme }) => theme.lightBlueText};
      }
      to {
        background-color: transparent;
        color: ${({ theme }) => theme.lightBlueText};
      }
    }
  }
`;

export const AboutMeShopNavLink = ({ children }) => {
  const handleShopLink = (e) => {
    e.preventDefault();
    window.location.href = '/shop';
  };

  return (
    <Button to="/shop" onClick={handleShopLink}>
      <ButtonParagraph>
        Autorka <br />
        „Autopilot Szczęścia”
      </ButtonParagraph>
    </Button>
  );
};

AboutMeShopNavLink.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

AboutMeShopNavLink.default = {
  color: null,
  children: 'button',
};
