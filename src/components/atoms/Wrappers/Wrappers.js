import styled from 'styled-components';

// Wrapper for embracing Sections
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 50px 100px 50px;
`;

// Wrapper for embracing text in About and Home Sections
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Wrapper for embracing graphic elements in About and Home Sections
const GraphicsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { TextWrapper, GraphicsWrapper, MainWrapper };
