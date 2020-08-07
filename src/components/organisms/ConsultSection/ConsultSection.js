import React from 'react';
import styled from 'styled-components';
import ConsultBox from 'components/molecules/ConsultBox/ConsultBox';
import { MainWrapper, RowWrapper } from 'components/atoms/Wrappers/Wrappers';
import SectionBreak from '../../molecules/SectionBreak/SectionBreak';

const ConsultWrapper = styled(MainWrapper)``;

const BoxesWrapper = styled(RowWrapper)`
  align-items: flex-start;
  padding: 30px;
`;

const ConsultSection = () => {
  return (
    <>
      <ConsultWrapper>
        <SectionBreak firstTitle="" secondTitle="Konsultacje i Szkolenia" />
        <BoxesWrapper>
          <ConsultBox type="individual" />
          <ConsultBox type="firm" />
        </BoxesWrapper>
      </ConsultWrapper>
    </>
  );
};

export default ConsultSection;
