import React from 'react';
import { NavLink } from 'react-router-dom';
import KaviHats from 'assets/images/kaviHats.jpg';
import Lentils from 'assets/images/lentils.jpg';
import Provisions from 'assets/images/provisions.jpg';
import styled from 'styled-components';
import { media } from 'utils';
import { SHeader, SParagraph, XsParagraph } from 'utils/Headers';

const CaWrapper = styled.div`
  margin: 0;
  background-color: white;

  ${media.desktop`
  display: flex;
  justify-content: center;
  align-items: center;`}
`;

const Card = styled(NavLink)`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  height: 45rem;
  width: 25rem;
  text-decoration: none;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -1rem 0 2rem #f2f2f2;

  ${media.desktop`
  height: 50rem;
  width: 34rem;
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  right: 0px;
  z-index: 5;

  :not(:first-child) {
    margin-left: -80px;
  }

  :first-child,
  :last-child {
    height: 42rem;
    width: 34rem;
  }

  :hover {
    transform: translateY(-20px);
    right: 8rem;
    transition: 0.4s ease-out;

    :first-child,
    :last-child {
      height: 50rem;
      width: 32rem;
    }
  }
  `}
`;

const CaImage = styled.div`
  width: 100%;
  height: 25%;
  background-image: url(${({ image }) => image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const CaHeading = styled(SHeader)`
  font-weight: 700;
  margin: 2rem;

  ${media.desktop`
  width: 28rem;
  `}
`;

const Category = styled(XsParagraph)`
  font-weight: 800;
  color: #e73d3d;
  margin-left: 2rem;
`;

const Text = styled(SParagraph)`
  margin: 0.5rem 0 2rem 2rem;
  font-weight: 500;
  color: rgba(91, 111, 126, 1);

  ${media.desktop`
  width: 28rem;`}
`;

const posts = [
  {
    id: 1,
    image: Provisions,
    title: 'Postanowienia noworoczne – czy warto się nimi dzielić?',
    category: 'lqm',
    text:
      'Postanowienia noworoczne – jedni trzymają je dla siebie, inni dzielą z bliskimi lub publikują w mediach społecznościowych w tym wpisie podpowiadam jakie podejście wybrać chcąc zwiększyć szanse realizacji swoich noworocznych postanowień.',
  },
  {
    id: 2,
    image: KaviHats,
    title: 'Jak polubić zmiany zamiast się ich bać?',
    category: 'lqm',
    text:
      'Nie ma znaczenia czy chodzi o życie prywatne czy zawodowe – zmiany są nieuniknione Nawet jeśli na same zmiany, często nie mamy wpływu, tylko od nas zależy to jak na nie zareagujemy. Czy będziemy postrzegać zmianę przez pryzmat lęku i obaw, czy też jako okazję do rozwoju...',
  },
  {
    id: 3,
    image: Lentils,
    title: 'Czarna soczewica w roli głównej',
    category: 'food',
    text:
      'Ostatnio coraz więcej w naszej diecie warzyw strączkowych. Jakoś w sposób naturalny, powoli przeszliśmy na dietę semiwegetariańską (dieta bezmięsna, ale od czasu do czasu są ryby). Brak białka mięsnego trzeba czymś zastąpić, a warzywa strączkowe idealnie się do tego nadają.',
  },
];

const Carousel = () => {
  return (
    <>
      <CaWrapper>
        {posts.map((post) => (
          <div key={post.id}>
            <Card to="/blog">
              <CaImage image={post.image} />
              <CaHeading>{post.title}</CaHeading>
              <Category>{post.category}</Category>
              <Text>{post.text}</Text>
            </Card>
          </div>
        ))}
      </CaWrapper>
    </>
  );
};

export default Carousel;
