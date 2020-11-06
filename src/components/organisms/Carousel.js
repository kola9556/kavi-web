import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
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

const CaImage = styled.img`
  width: 100%;
  height: 25%;
  object-fit: cover;
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

const CAROUSEL_QUERY = `query Carousel {
  allArticles(orderBy: _firstPublishedAt_ASC) {
    author
    title
    id
    date
    mainImage {
      url
    }
    postContent {
      ... on ParagraphRecord {
        id
        paragraphContent
      }
    }
  }
}`;

const Carousel = () => {
  const { loading, error, data } = useQuery(CAROUSEL_QUERY, {
    variables: {
      limit: 10,
    },
  });
  if (loading) return '';
  if (error) return 'Something Bad Happened';

  return (
    <>
      <CaWrapper>
        {data.allArticles
          .reverse()
          .slice(0, 3)
          .map(({ title, mainImage, id, date, postContent }) => (
            <div key={id}>
              <Card to={`/blog/post/${id}`}>
                <CaImage src={mainImage.url} />
                <CaHeading>{title}</CaHeading>
                <Category>{date}</Category>
                <Text>
                  {`${postContent[0].paragraphContent.trim().split(' ').slice(0, 30).join(' ')}...`}
                </Text>
              </Card>
            </div>
          ))}
      </CaWrapper>
    </>
  );
};

export default Carousel;
