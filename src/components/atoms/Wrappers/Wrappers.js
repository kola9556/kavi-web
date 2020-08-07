import styled from 'styled-components';

// Wrapper for embracing Sections
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 5rem 10rem 5rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { ColumnWrapper, RowWrapper, MainWrapper };
