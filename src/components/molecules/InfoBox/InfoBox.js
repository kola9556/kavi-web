import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { paths } from 'utils/paths';
import { NavLink } from 'react-router-dom';
import { media } from 'utils';
import LogoK from 'assets/logos/logoKSmall.jpg';
import { MParagraph } from 'utils/Headers';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;

  ${media.desktop`padding-right: 5rem;`}
`;

const OnlyDesktop = styled.div`
  display: none;
  ${media.desktop` display: flex;`}
`;

const Logo = styled.div`
  width: 13rem;
  height: 5.3rem;
  background-image: url(${LogoK});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;

  ${media.desktop`
  width: 19rem;
  height: 6.3rem;
 `}
`;

const Label = styled(MParagraph)`
  font-weight: 700;
`;

const List = styled.ul`
  padding: 1rem 0 0 0;
  list-style-type: none;
  margin: 0;
`;

const Point = styled.li`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.footerText};
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.footerText};

  :visited {
    color: ${({ theme }) => theme.footerText};
  }

  :hover {
    font-weight: 700;
  }
`;

const InfoBox = ({ mediaType }) => {
  return (
    <>
      <InfoWrapper>
        <SectionWrapper>
          <Logo />
          <List>
            <Point>tel. 660 720 706</Point>
            <Point>lifeqm.kontakt@gmail.com</Point>
            <Point>Katarzyna Kozłowska</Point>
          </List>
        </SectionWrapper>
        <OnlyDesktop>
          <SectionWrapper>
            <Label>Produkty</Label>
            <List>
              <Point>
                <Link to={paths.shop}>Sklep</Link>
              </Point>
              <Point>
                <Link to={paths.consultation}>Szkolenia</Link>
              </Point>
            </List>
          </SectionWrapper>
          <SectionWrapper>
            <Label>Dla firm</Label>
            <List>
              <Point>
                <Link to={paths.collabo}>Współpraca</Link>
              </Point>
              <Point>
                <Link to={paths.contact}>Kontakt</Link>
              </Point>
            </List>
          </SectionWrapper>
          <SectionWrapper>
            <Label>Marka</Label>
            <List>
              <Point>
                <Link to={paths.blog}>Blog</Link>
              </Point>
              <Point>
                <Link to={paths.consultation}>Szkolenia</Link>
              </Point>
            </List>
          </SectionWrapper>
        </OnlyDesktop>
      </InfoWrapper>
    </>
  );
};

InfoBox.propTypes = {
  mediaType: PropTypes.element.isRequired,
};

export default InfoBox;
