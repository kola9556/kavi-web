import React from 'react';
import styled from 'styled-components';
import MediaIcon from 'components/atoms/MediaIcon/MediaIcon';

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MediaBox = () => (
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
);

export default MediaBox;
