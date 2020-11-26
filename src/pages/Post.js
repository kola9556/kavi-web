import React from 'react';
import postBottom from 'assets/images/postBottom.jpg';
import StyledBackgroundBottom from 'components/atoms/FixedBackgroundBottom';
import Footer from 'components/organisms/Footer';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import { useQuery } from 'graphql-hooks';
import styled from 'styled-components';
import ScrollTemplate from 'templates/ScrollTemplate';
import { MainText, SecondHeading } from 'utils/Headers';
import media from 'utils/media';

const PostLabel = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;

  ${media.desktop`
    height: 70vh;
  `}
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  padding: 2rem;
  background-color: rgb(102, 103, 112);
  color: white;

  ${media.desktop`
  font-size: 45px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 100px 0;
  width: 80%;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
  width: 55%;
  `}
`;

const StyledParagraph = styled(MainText)`
  font-size: 1.6rem;
  margin: 1rem 0;

  ${media.tablet`
  font-size: 2rem;

  `}
`;

const Heading = styled(SecondHeading)`
  font-size: 2rem;
  text-align: center;

  ${media.tablet`
  font-size: 2.8rem;
  `}
`;

const Date = styled(MainText)`
  font-size: 1.4rem;
  margin-top: 2rem;
`;

const StyledImage = styled.img`
  width: 85%;
  height: auto;
  object-fit: cover;
  margin: 2rem 0;

  ${media.tablet`
  margin: 2em 0;
  `}
`;

const StyledLink = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(121, 173, 166);
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const SINGLE_POST_QUERY = `query SinglePost($slicedId: ItemId!) {
  article(filter: {id: {eq: $slicedId}}) {
    mainImage {
      url
      alt
    }
    title
    author
    date
    postContent {
      ... on MiddleHeadingRecord {
        id
        headingContent
      }
      ... on ParagraphRecord {
        id
        paragraphContent
      }
      ... on PostImageRecord {
        id
        postImageData {
          url
          alt
        }
      }
      ... on LinkRecord {
        id
        link
        opisLinku
      }
    }
  }
}`;

const Post = () => {
  const currentPath = window.location.pathname;

  const slicedId = currentPath.slice(11);

  const { loading, error, data } = useQuery(SINGLE_POST_QUERY, {
    variables: {
      slicedId,
    },
  });
  if (loading) return '';
  if (error) return `Something Bad Happened ${slicedId} ${data}`;

  const {
    article: { mainImage, title, author, date, postContent },
  } = data;

  return (
    <>
      <ScrollTemplate>
        <Navigationbar />
        <PostLabel alt={mainImage.alt} img={mainImage.url}>
          <Title>{title}</Title>
        </PostLabel>
        <PostWrapper>
          <ContentWrapper>
            <Date>{date}</Date>
            {postContent.map((item) => {
              const itemKey = Object.keys(item)[1];
              switch (itemKey) {
                case 'paragraphContent':
                  return <StyledParagraph key={item.id}>{item.paragraphContent}</StyledParagraph>;
                case 'headingContent':
                  return <Heading key={item.id}>{item.headingContent}</Heading>;
                case 'postImageData':
                  return (
                    <StyledImage
                      key={item.id}
                      src={item.postImageData.url}
                      alt={item.postImageData.alt}
                    />
                  );
                case 'link':
                  return (
                    <StyledLink key={item.id} href={item.link} rel="noreferrer" target="_blank">
                      {item.opisLinku}
                    </StyledLink>
                  );
                default:
                  return <p>...</p>;
              }
            })}
            <p>{author}</p>
          </ContentWrapper>
        </PostWrapper>
        <StyledBackgroundBottom img={postBottom} />
        <Footer />
      </ScrollTemplate>
    </>
  );
};

export default Post;
