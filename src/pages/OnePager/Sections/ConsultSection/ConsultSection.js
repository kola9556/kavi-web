import React from 'react';
import styled from 'styled-components';
import { CONSULT_TYPES } from 'utils/constans';
import ConsultBox from 'components/molecules/ConsultBox/ConsultBox';
import { MainWrapper, RowWrapper } from 'utils/Wrappers/Wrappers';
import SectionBreak from '../../../../components/molecules/SectionBreak/SectionBreak';

const ConsultWrapper = styled(MainWrapper)`
  padding: 0px 50px 0px 50px;
`;

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
          <ConsultBox consultType={CONSULT_TYPES.individual} />
          <ConsultBox consultType={CONSULT_TYPES.firm} />
        </BoxesWrapper>
      </ConsultWrapper>
    </>
  );
};

export default ConsultSection;
