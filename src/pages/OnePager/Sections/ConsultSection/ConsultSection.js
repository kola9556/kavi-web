import React from 'react';
import ConsultBox from 'components/molecules/ConsultBox/ConsultBox';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array.isRequired,
};

export default ConsultSection;
