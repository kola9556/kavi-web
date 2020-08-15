import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConsultBox from 'components/molecules/ConsultBox/ConsultBox';
import SectionBreak from '../../../../components/molecules/SectionBreak/SectionBreak';

const ConsultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 50px 0px 50px;
`;

const ConsultSection = ({ content }) => {
  return (
    <>
      <ConsultWrapper>
        <SectionBreak firstTitle="" secondTitle="Konsultacje i Szkolenia" />
        <ConsultBox content={content} />
      </ConsultWrapper>
    </>
  );
};

ConsultSection.propTypes = {
  content: PropTypes.element.isRequired,
};

export default ConsultSection;
