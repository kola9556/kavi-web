import React from 'react';
import styled from 'styled-components';
import Bead from 'assets/images/bead.svg';
import MediaIcon from 'components/atoms/MediaIcon/MediaIcon';
import InfoBox from 'components/molecules/InfoBox/InfoBox';
import { RowWrapper, ColumnWrapper } from 'components/atoms/Wrappers/Wrappers';

const FooterWrapper = styled.div`
  margin: 0;
  padding: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.footerBackground};
`;

const ContentWrapper = styled(RowWrapper)`
  padding-left: 20rem;
`;

const BottomWrapper = styled(ColumnWrapper)`
  padding-left: 20rem;
  width: 80vw;
`;

const BeadIcon = styled.div`
  width: 35rem;
  height: 35rem;
  background-image: url(${Bead});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 3rem;
  padding-left: 10rem;
`;

const Line = styled.div`
  width: 50%;
  height: 1px;
  border-top: 1px solid rgba(141, 141, 141, 0.31);
  position: relative;
  bottom: 8rem;
  left: 3rem;
`;

const MediaWrapper = styled(RowWrapper)`
  position: relative;
  bottom: 4rem;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <ContentWrapper>
          <InfoBox />
          <BeadIcon />
        </ContentWrapper>
        <BottomWrapper>
          <Line />
          <MediaWrapper>
            <MediaIcon href="https://www.facebook.com/profile.php?id=1798136115" target="_blank" />
            <MediaIcon
              href="https://www.instagram.com/kavi_foodies/?fbclid=IwAR3IVi3_fs1Rcl6vhLMTalRGyhWT5KU_X_mBgr9p56uZX6WdX3no1I8W694"
              target="_blank"
              insta
            />
          </MediaWrapper>
        </BottomWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
