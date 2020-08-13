import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Bead from 'assets/images/bead.svg';
import MediaIcon from 'components/atoms/MediaIcon/MediaIcon';
import InfoBox from 'components/molecules/InfoBox/InfoBox';
import { MainWrapper, RowWrapper, ColumnWrapper } from 'utils/Wrappers/Wrappers';

const FooterWrapper = styled(MainWrapper)`
  padding: 3rem 5rem 0 5rem;
  background-color: ${({ theme }) => theme.footerBackground};

  ${({ about }) =>
    about &&
    css`
      background: rgb(233, 231, 231);
      background: linear-gradient(0deg, rgba(233, 231, 231, 1) 17%, rgba(250, 253, 254, 1) 100%);
    `}
`;

const ContentWrapper = styled(RowWrapper)`
  justify-content: flex-start;
`;

const BottomWrapper = styled(ColumnWrapper)`
  margin-left: 6rem;
  width: 70vw;
`;

const BeadIcon = styled.div`
  width: 35rem;
  height: 35rem;
  background-image: url(${Bead});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
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

const Copyrights = styled.p`
  color: ${({ theme }) => theme.footerText};
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 2rem;
`;

const Footer = ({ about }) => {
  return (
    <>
      <FooterWrapper about={about}>
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
        <Copyrights>&copy; 2020 Aleksandra Kurdej. All rights reserved.</Copyrights>
      </FooterWrapper>
    </>
  );
};

Footer.propTypes = {
  about: PropTypes.bool,
};

Footer.defaultProps = {
  about: 'false',
};

export default Footer;
