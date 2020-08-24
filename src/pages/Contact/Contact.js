import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import { MainHeading, PostscriptHeading, MParagraph } from 'utils/Headers';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop/FixedBackgroundTop';
import contactTop from 'assets/images/contactTop.jpg';
import contactBottom from 'assets/images/contactBottom.jpg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom/FixedBackgroundBottom';
import Footer from 'components/organisms/Footer/Footer';
import AboutMeBlock from '../../components/molecules/AboutMeBlock/AboutMeBlock';

const pageContent = {
  header: 'Napisz do mnie!',
  postscript: 'Z przyjemnością odpowiem na Twoje pytania',
  mailHeader: 'Adres mailowy:',
  mail: 'kavikozlowska@gmail.com',
  corespondingHeader: 'Adres korespondencyjny:',
  adress: 'Al. Iberyjska 10/2 (Ogrody Tesoro) 81-198 Pogórze k. Gdyni',
  phoneHeader: 'Telefon:',
  phone: '658 984 125',
  aboutMeBlock: {
    header: 'Kavi Kozłowska',
    description: (
      <>
        Zawodowo zajmuję się LIFE Quality Managementem (LifeQM), gdzie JAKOŚĆ życia jest WAŻNA.{' '}
        <br />
        Jestem trenerem skutecznej zmiany i blogerem. <br />
        Autorką książki „Autopilot Szczęścia”.
      </>
    ),
    media: 'Znajdziesz mnie na:',
  },
};

const StyledFixedBackground = styled(FixedBackgroundTop)`
  ${media.desktop`
    height: 60vh;
  `}

  :after {
    opacity: 0.8;
  }
`;

const ContactContent = styled.div`
  margin: 6rem 0;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
  `}
`;

const ContactTextWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    flex-grow:1;
  `}
`;

const ContactLabel = styled(MParagraph)`
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const ContactParagraph = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.footerText};
`;

const StyledBackgroundBottom = styled(FixedBackgroundBottom)`
  height: 50vh;
`;

const Contact = () => (
  <>
    <Navigationbar />
    <StyledFixedBackground img={contactTop}>
      <MainHeading>{pageContent.header}</MainHeading>
      <PostscriptHeading>{pageContent.postscript}</PostscriptHeading>
    </StyledFixedBackground>
    <ContactContent>
      <ContactTextWrapper>
        <ContactLabel>{pageContent.mailHeader}</ContactLabel>
        <ContactParagraph>{pageContent.mail}</ContactParagraph>
        <ContactLabel>{pageContent.corespondingHeader}</ContactLabel>
        <ContactParagraph>{pageContent.adress}</ContactParagraph>
        <ContactLabel>{pageContent.phoneHeader}</ContactLabel>
        <ContactParagraph>{pageContent.phone}</ContactParagraph>
      </ContactTextWrapper>
      <AboutMeBlock
        mediaHeader={pageContent.aboutMeBlock.media}
        header={pageContent.aboutMeBlock.header}
        description={pageContent.aboutMeBlock.description}
      />
    </ContactContent>
    <StyledBackgroundBottom img={contactBottom} />
    <Footer />
  </>
);

export default Contact;
