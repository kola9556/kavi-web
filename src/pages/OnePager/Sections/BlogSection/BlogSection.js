/* eslint-disable react/no-array-index-key */
import React from 'react';
import arrowsDesktop from 'assets/images/smallerArrows.jpg';
import arrows from 'assets/images/xxsArrows.jpg';
import LogoButton from 'components/atoms/LogoButton';
import MainButton from 'components/atoms/MainButton';
import SectionBreak from 'components/molecules/SectionBreak';
import Carousel from 'components/organisms/Carousel';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';

const BlogWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 5rem 6rem 5rem;
`;

const RedText = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.redText};
  text-align: center;
  font-weight: 800;
  padding: 4rem 0 4rem 0;

  ${media.desktop`
    font-size: 2rem;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
  `}
`;

const ListWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 6rem;

  ${media.desktop`
    padding: 2rem 4rem;
  `}
`;

const Label = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.navyblueText};
  padding-bottom: 1rem;

  ${media.desktop`
    font-size: 1.8rem;
  `}
`;

const List = styled.ul`
  max-width: 27rem;
  list-style-image: url(${arrows});

  ${media.desktop`
    max-width: 37rem;
    list-style-image: url(${arrowsDesktop});
  `}
`;

const Point = styled.li`
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};

  ${media.desktop`
    font-size: 1.8rem;
  `}
`;

const LastPostsWrapper = styled.div`
  margin: 0;

  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AbContentHeading = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.navyblueText};
  padding-bottom: 2rem;
  ${media.desktop`
    margin: 2rem 0;
    position: relative;
    right: 37rem;
    padding-bottom: 0rem;
  `}
`;
const LastPostsHeading = styled(AbContentHeading)`
  margin: 1rem 0;
  ${media.desktop`
  position: static;
  margin: 0rem 0;
  `}
`;

const LastPostsParagraph = styled.p`
  text-align: center;
  width: 80%;
  margin-bottom: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
  ${media.desktop`
  width: 40%;
  margin-bottom: 5rem;
  font-weight: 500;
  `}
`;

const ToBlogButton = MainButton;

const BlogSection = ({ redText, listPoints }) => {
  return (
    <>
      <BlogWrapper>
        <SectionBreak icon firstTitile="Wazne Jak" secondTitle="Blog" />
        <RedText>{redText}</RedText>
        <ContentWrapper>
          <ListWrapper>
            <Label>Dowiesz się jak:</Label>
            <List>
              {listPoints.map((point, index) => (
                <Point key={index}>{point.text}</Point>
              ))}
            </List>
          </ListWrapper>
          <LogoButton />
        </ContentWrapper>
        <LastPostsWrapper>
          <LastPostsHeading>Ostatnie posty</LastPostsHeading>
          <LastPostsParagraph>
            „Ważne JAK!” to dawka konkretnej wiedzy o sile osobistego wpływu na jakość życia oraz o
            skutecznym przeprowadzaniu życiowych zmian.
          </LastPostsParagraph>
          <Carousel />
          <ToBlogButton to="/blog">Zobacz wszystkie posty</ToBlogButton>
        </LastPostsWrapper>
      </BlogWrapper>
    </>
  );
};

BlogSection.propTypes = {
  redText: PropTypes.element.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  listPoints: PropTypes.array.isRequired,
};

export default BlogSection;
