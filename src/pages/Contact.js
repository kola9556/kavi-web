import React from 'react';
import contactBottom from 'assets/images/contactBottom.jpg';
import contactTop from 'assets/images/contactTop.jpg';
import logoKaviTransparent from 'assets/logos/logoKaviTransparent.svg';
import FixedBackgroundBottom from 'components/atoms/FixedBackgroundBottom';
import FixedBackgroundTop from 'components/atoms/FixedBackgroundTop';
import Footer from 'components/organisms/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { media } from 'utils';
import { MainHeading, MParagraph, PostscriptHeading } from 'utils/Headers';

import AboutMeBlock from '../components/molecules/AboutMeBlock';

const pageContent = {
  header: 'Napisz do mnie!',
  postscript: 'Z przyjemnością odpowiem na Twoje pytania',
  mailHeader: 'Adres mailowy:',
  mail: 'lifeqm.kontakt@gmail.com',
  corespondingHeader: 'Adres korespondencyjny:',
  adress: '',
  phoneHeader: 'Telefon:',
  phone: '660 720 706',
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
  margin: 0rem 0 6rem;
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
    justify-content: flex-start;
  `}
`;

const ContactLogo = styled.div`
  width: 33rem;
  height: 25.3rem;
  background-image: url(${logoKaviTransparent});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
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

const Contact = () => {
  return (
    <>
      <ScrollTemplate>
        <Navigationbar />
        <StyledFixedBackground img={contactTop}>
          <MainHeading>{pageContent.header}</MainHeading>
          <PostscriptHeading>{pageContent.postscript}</PostscriptHeading>
        </StyledFixedBackground>
        <ContactContent>
          <ContactTextWrapper>
            <ContactLogo />
            <ContactLabel>{pageContent.mailHeader}</ContactLabel>
            <ContactParagraph>{pageContent.mail}</ContactParagraph>
            <ContactLabel>{pageContent.phoneHeader}</ContactLabel>
            <ContactParagraph>{pageContent.phone}</ContactParagraph>
          </ContactTextWrapper>
          <AboutMeBlock />
        </ContactContent>
        <StyledBackgroundBottom img={contactBottom} />
        <Footer />
      </ScrollTemplate>
    </>
  );
};

export default Contact;
