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
  height: 100vh;
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
  font-size: 45px;
  text-align: center;
  padding: 2rem;
  background-color: rgb(102, 103, 112);
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 100px 0;
  width: 55%;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled(MainText)`
  font-size: 2rem;
  margin: 4rem 0;
`;

const Heading = styled(SecondHeading)`
  font-size: 2.8rem;
  text-align: center;
`;

const Date = styled(MainText)`
  font-size: 1.4rem;
  margin-top: 2rem;
`;

const StyledImage = styled.img`
  width: 85%;
  height: auto;
  object-fit: cover;
  margin: 4rem 0;
`;

const SINGLE_POST_QUERY = `query SinglePost($slicedId: ItemId!) {
  article(filter: {id: {eq: $slicedId}}) {
    mainImage {
      url
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
        }
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
  if (loading) return 'Loading...';
  if (error) return `Something Bad Happened ${slicedId} ${data}`;

  const {
    article: { mainImage, title, author, date, postContent },
  } = data;

  return (
    <>
      <ScrollTemplate>
        <Navigationbar />
        <PostLabel img={mainImage.url}>
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
                  return <StyledImage key={item.id} src={item.postImageData.url} />;
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
