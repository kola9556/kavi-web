import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoK from 'assets/logos/logoKSmall.jpg';
import { MParagraph } from 'components/atoms/Headers/Headers';
import { RowWrapper, ColumnWrapper } from 'components/atoms/Wrappers/Wrappers';

const InfoWrapper = styled(RowWrapper)``;

const SectionWrapper = styled(ColumnWrapper)`
  padding-right: 8rem;
`;

const Logo = styled.div`
  min-width: 19rem;
  height: 6.3rem;
  background-image: url(${LogoK});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
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

const InfoBox = () => {
  return (
    <>
      <InfoWrapper>
        <SectionWrapper>
          <Logo />
          <List>
            <Point>tel. 658 984 125</Point>
            <Point>kavikozlowska@gmail.com</Point>
            <Point>Katarzyna Kozłowska</Point>
          </List>
        </SectionWrapper>
        <SectionWrapper>
          <Label>Produkty</Label>
          <List>
            <Point>
              <Link to="/shop">Sklep</Link>
            </Point>
            <Point>
              <Link to="/consultations">Szkolenia</Link>
            </Point>
          </List>
        </SectionWrapper>
        <SectionWrapper>
          <Label>Dla firm</Label>
          <List>
            <Point>
              <Link to="/collabo">Współpraca</Link>
            </Point>
            <Point>
              <Link to="/contact">Kontakt</Link>
            </Point>
          </List>
        </SectionWrapper>
        <SectionWrapper>
          <Label>Marka</Label>
          <List>
            <Point>
              <Link to="/blog">Blog</Link>
            </Point>
            <Point>
              <Link to="/consultations">Szkolenia</Link>
            </Point>
          </List>
        </SectionWrapper>
      </InfoWrapper>
    </>
  );
};

export default InfoBox;
