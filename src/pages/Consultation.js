import React, { Component } from 'react';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';

const ConsultWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 2.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.navyblueText};
`;

class Consultation extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollTemplate>
          <Navigationbar />
          <ConsultWrapper>
            <Heading>Szkolenia i Konsultacje</Heading>
            <Paragraph>Oferta w trakcie przygotowań</Paragraph>
          </ConsultWrapper>
        </ScrollTemplate>
      </>
    );
  }
}

export default Consultation;
