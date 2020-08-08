// Headers and paragraphs for all project

import styled from 'styled-components';

const XlHeader = styled.h2`
  margin: 0;
  font-size: 2.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const XlHeaderBold = styled(XlHeader)`
  font-weight: 800;
`;

const BlueHeader = styled.h2`
  margin: 0;
  font-size: 5.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.lightBlueText};
`;

const SHeader = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const SHeaderBold = styled(SHeader)`
  font-weight: 700;
`;

const MParagraph = styled.p`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const MParagraphBold = styled(MParagraph)`
  font-weight: 800;
`;

const SParagraph = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const BoldSpan = styled.span`
  font-weight: 800;
`;

export {
  XlHeader,
  XlHeaderBold,
  BlueHeader,
  SHeader,
  SHeaderBold,
  MParagraph,
  MParagraphBold,
  SParagraph,
  BoldSpan,
};
