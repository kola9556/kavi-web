import React from 'react';
import styled from 'styled-components';
import Arrows from 'assets/images/smallerArrows.jpg';
import { MainWrapper, RowWrapper, ColumnWrapper } from 'components/atoms/Wrappers/Wrappers';
import { SHeader, MParagraphBold } from 'components/atoms/Headers/Headers';
import SectionBreak from 'components/molecules/SectionBreak/SectionBreak';
import LogoButton from 'components/atoms/LogoButton/LogoButton';

const BlogWrapper = styled(MainWrapper)`
  padding: 6rem 5rem 6rem 5rem;
`;

const RedText = styled(SHeader)`
  color: ${({ theme }) => theme.redText};
  text-align: center;
  font-weight: 800;
  padding: 4rem 0 2rem 0;
`;

const ContentWrapper = RowWrapper;

const ListWrapper = styled(ColumnWrapper)`
  padding: 2rem 4rem;
`;

const Label = styled(MParagraphBold)`
  padding-bottom: 1rem;
`;

const List = styled.ul`
  max-width: 37rem;
  list-style-image: url(${Arrows});
`;

const Point = styled.li`
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const listPoints = [
  { text: 'pozbyć się niesprzyjających nawyków i kompulsywnych zachowań' },
  { text: 'uformować pozytywne podejścia do rzeczywistości' },
  { text: 'podnieść efektywność osobistą' },
  {
    text: 'osiągać cele, zdobywać marzenia, wykorzystać proste sposoby na trudne wyzwania',
  },
  {
    text:
      'stworzyć osobiste rytuały dla zdrowia i piękna, poznać styl żywienia "80/20" sprzyjający zdrowiu i dobremu sapomoczuciu',
  },
];

const BlogSection = () => {
  return (
    <>
      <BlogWrapper>
        <SectionBreak icon firstTitile="Wazne Jak" secondTitle="Blog" />
        <RedText>
          „Ważne JAK!” to dawka konkretnej wiedzy <br />o sile osobistego wpływu na jakość życia
          oraz o skutecznym <br />
          przeprowadzaniu życiowych zmian.
        </RedText>
        <ContentWrapper>
          <ListWrapper>
            <Label>Dowiesz się jak:</Label>
            <List>
              {listPoints.map((point) => (
                <Point>{point.text}</Point>
              ))}
            </List>
          </ListWrapper>
          <LogoButton />
        </ContentWrapper>
      </BlogWrapper>
    </>
  );
};

export default BlogSection;
