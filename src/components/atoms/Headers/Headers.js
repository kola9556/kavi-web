import styled from 'styled-components';

const FHeader = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const FHeaderBold = styled(FHeader)`
  font-weight: 800;
`;

const BlueHeader = styled.h2`
  font-size: 56px;
  font-weight: 900;
  color: ${({ theme }) => theme.lightBlueText};
`;

export { FHeader, FHeaderBold, BlueHeader };
