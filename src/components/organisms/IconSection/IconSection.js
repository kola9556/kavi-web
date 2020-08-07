import React from 'react';
import styled from 'styled-components';
import { RowWrapper } from 'components/atoms/Wrappers/Wrappers';
import IconBox from 'components/molecules/IconBox/IconBox';

const SectionWrapper = styled(RowWrapper)`
  position: relative;
  left: 30px;
  justify-content: space-between;
  width: 65vw;
  padding-bottom: 50px;
  align-items: baseline;
`;

const IconSection = () => {
  return (
    <>
      <SectionWrapper>
        <IconBox number="1" icon="mind">
          Pozytywny Umysł
        </IconBox>
        <IconBox number="2" icon="health">
          Zdrowy Lifestyle
        </IconBox>
        <IconBox number="3" icon="change">
          Zmiana Nawyków
        </IconBox>
        <IconBox number="4" icon="logoW">
          Blog
        </IconBox>
      </SectionWrapper>
    </>
  );
};

export default IconSection;
