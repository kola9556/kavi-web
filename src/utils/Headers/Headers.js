// Headers and paragraphs for all project

import styled from 'styled-components';

const XxxlHeading = styled.h1`
  margin: 0;
  font-size: 6.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
`;

const XxlHeading = styled.h1`
  margin: 0;
  font-size: 4.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
`;

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

const XsHeader = styled.h3`
  margin: 0;
  font-size: 1.8rem;
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

const XsParagraph = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const BoldSpan = styled.span`
  font-weight: 800;
`;

const BoldSpanS = styled.span`
  font-weight: 700;
`;

export {
  XxxlHeading,
  XxlHeading,
  XlHeader,
  XlHeaderBold,
  BlueHeader,
  SHeader,
  SHeaderBold,
  XsHeader,
  MParagraph,
  MParagraphBold,
  SParagraph,
  XsParagraph,
  BoldSpan,
  BoldSpanS,
};
