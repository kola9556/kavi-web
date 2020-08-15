import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';
import Bead from 'assets/images/bead.svg';
import MediaIcon from 'components/atoms/MediaIcon/MediaIcon';
import InfoBox from 'components/molecules/InfoBox/InfoBox';
import { PAGE_TYPE } from 'utils/constans';

const FooterWrapper = styled.div`
  width: 100%;
  padding: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.footerBackground};

  ${({ pageType }) =>
    pageType === PAGE_TYPE.about &&
    css`
      background: rgb(233, 231, 231);
      background: linear-gradient(0deg, rgba(233, 231, 231, 1) 17%, rgba(250, 253, 254, 1) 100%);
    `}

  ${({ pageType }) =>
    pageType === PAGE_TYPE.main &&
    css`
      background: rgb(218, 218, 218);
      background: linear-gradient(0deg, rgba(218, 218, 218, 1) 59%, rgba(246, 246, 246, 1) 100%);
    `}

  ${media.desktop`align-items: center;
  padding: 0;`}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BeadIcon = styled.div`
  width: 35rem;
  height: 35rem;
  background-image: url(${Bead});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: none;

  ${media.desktop`
  display: inline;
  `}
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid rgba(141, 141, 141, 0.31);
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Copyrights = styled.p`
  color: ${({ theme }) => theme.footerText};
  font-size: 1.2rem;
  font-weight: 600;

  ${media.desktop`margin: 0 0 1rem 0;`}
`;

const Footer = ({ pageType }) => {
  return (
    <>
      <FooterWrapper pageType={pageType}>
        <ContentWrapper>
          <LeftWrapper>
            <InfoBox />
            <Line />
            <MediaWrapper>
              <MediaIcon
                href="https://www.facebook.com/profile.php?id=1798136115"
                target="_blank"
                face
                footer
              />
              <MediaIcon
                href="https://www.instagram.com/kavi_foodies/?fbclid=IwAR3IVi3_fs1Rcl6vhLMTalRGyhWT5KU_X_mBgr9p56uZX6WdX3no1I8W694"
                target="_blank"
                insta
                footer
              />
            </MediaWrapper>
          </LeftWrapper>
          <BeadIcon />
        </ContentWrapper>
        <Copyrights>&copy; 2020 Aleksandra Kurdej. All rights reserved.</Copyrights>
      </FooterWrapper>
    </>
  );
};

Footer.propTypes = {
  pageType: PropTypes.oneOf(['main', 'about']),
};

Footer.defaultProps = {
  pageType: 'main',
};

export default Footer;
