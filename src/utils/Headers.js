// Headers and paragraphs for all project
import styled from 'styled-components';
import { media } from 'utils';

const XxxlHeading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
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
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
  font-size: 2rem;
  `}
`;

const SHeaderBold = styled(SHeader)`
  font-weight: 700;
`;

const MParagraph = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
    font-size: 1.8rem;
  `}
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

const BlueSpan = styled(BoldSpan)`
  color: ${({ theme }) => theme.expressiveBlue};
`;

const BoldSpanS = styled.span`
  font-weight: 700;
`;

const MainHeading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  margin-bottom: 0.5rem;
  text-align: center;

  ${media.desktop`
  font-size: 4rem;
  `}
`;

const SecondHeading = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  margin-bottom: 0.5rem;
  text-align: left;

  ${media.desktop`
  font-size: 2rem;
  `}
`;

const PostscriptHeading = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  word-spacing: 0.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: center;
`;

const DescriptionParagraph = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.footerText};
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
  BlueSpan,
  MainHeading,
  SecondHeading,
  PostscriptHeading,
  DescriptionParagraph,
};
