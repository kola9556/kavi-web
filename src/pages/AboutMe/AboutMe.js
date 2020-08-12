import React from 'react';
import styled, { css } from 'styled-components';
import AboutImg from 'assets/images/about.jpg';
import Navigationbar from 'components/organisms/Navigationbar/Navigationbar';
import Greet from 'pages/AboutMe/components/Greet';
import Insta from 'assets/images/instagramIcon.svg';
import Facebook from 'assets/images/facebookIcon.svg';
import InstaRev from 'assets/images/instagramIconRevers.svg';
import FacebookRev from 'assets/images/facebookIconRevers.svg';

const AboutMeWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GreetWrapper = styled.div`
  width: 100%;
  height: 75vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 1;
  animation: show 3s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  // Fake background made to give the opacity only for background
  :after {
    content: '';
    background-image: url(${AboutImg});
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Medias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -3.8rem;
  animation: drop 2.5s;

  @keyframes drop {
    from {
      bottom: 3rem;
    }
    to {
      bottom: -3.8rem;
    }
  }
`;

const Icon = styled.a`
  margin: 1rem;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  cursor: pointer;

  ${({ insta }) =>
    insta &&
    css`
      background-image: url(${Insta});
      animation: change 0.5s;

      :hover {
        background-image: url(${InstaRev});
        animation: change 0.5s;

        @keyframes change {
          from {
            background-image: url(${Insta});
          }
          to {
            background-image: url(${InstaRev});
          }
        }
      }
    `}

  ${({ facebook }) =>
    facebook &&
    css`
      background-image: url(${Facebook});
      animation: change 0.5s;

      :onclick {
      }

      :hover {
        background-image: url(${FacebookRev});
        animation: change 0.5s;

        @keyframes change {
          from {
            background-image: url(${Facebook});
          }
          to {
            background-image: url(${FacebookRev});
          }
        }
      }
    `}
`;

const AboutMe = () => {
  return (
    <>
      <Navigationbar pageType="about" />
      <AboutMeWrapper>
        <GreetWrapper>
          <Greet />
          <Medias>
            <Icon
              facebook
              href="https://www.facebook.com/pg/Wa%C5%BCne-JAK-104715450959726/about/?ref=page_internal"
              target="_blank"
            />
            <Icon insta href="https://www.instagram.com/kavi_foodies/" target="_blank" />
          </Medias>
        </GreetWrapper>
        <h1>
          <br />
          <br />
          <br />
          <br />O mnie
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet cursus elit.
          Quisque euismod lectus eu mauris consectetur tempor. In eget suscipit nisl, quis rhoncus
          turpis. Donec ut dui finibus, vehicula elit nec, placerat nulla. Duis porta nibh a varius
          venenatis. Sed eros augue, imperdiet id semper quis, ultricies ac nisi. Quisque et
          ultrices lacus, et lacinia neque. Nam gravida magna nec porta egestas. Curabitur sit amet
          magna felis. Proin est quam, elementum vel sodales eget, porta in sapien. Cras tempor
          tortor eget varius mattis. Sed posuere ligula eu bibendum tincidunt. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta eros ac
          dolor finibus, et accumsan urna pulvinar. Aliquam scelerisque pretium tellus, sit amet
          consequat dolor pretium ut. Fusce tincidunt, risus quis gravida sagittis, nulla enim
          ullamcorper nibh, mattis tempus metus velit eget leo. Curabitur varius dictum interdum. In
          sit amet volutpat metus. Ut a egestas arcu. Nam luctus nulla sit amet sem dignissim
          gravida. Quisque cursus nec ante ac suscipit. Donec vestibulum purus vitae augue aliquam
          tempus quis nec nunc. Aenean non metus id libero posuere aliquet vel porttitor est. Sed
          eros justo, feugiat ut finibus nec, bibendum rutrum libero. Nulla volutpat condimentum
          libero vel finibus. Curabitur tincidunt felis id laoreet ullamcorper. Duis gravida, metus
          et imperdiet facilisis, urna odio rhoncus nisl, sed tincidunt nunc augue vitae dui.
          Curabitur interdum ex neque, sit amet scelerisque velit hendrerit nec. Pellentesque sem
          turpis, mollis at metus at, semper mattis lectus. Phasellus sed metus risus. Aenean
          elementum dignissim nisi, nec elementum quam. Donec id mauris neque. Proin velit nisl,
          condimentum in pulvinar a, consequat et leo. Nullam congue nulla turpis, ut mollis orci
          venenatis tempor. Vestibulum a pretium nunc. Vestibulum tincidunt erat laoreet
          pellentesque imperdiet. Morbi imperdiet euismod lacus eleifend commodo. Fusce malesuada
          luctus porta. Aenean consectetur massa sit amet enim sollicitudin, ut semper urna
          sagittis. Curabitur rhoncus egestas sapien porta aliquam. Nunc sodales augue vitae
          faucibus euismod. Nunc tempus lacus vitae urna semper scelerisque. Phasellus condimentum
          bibendum posuere. Phasellus sit amet odio justo. Etiam quis ornare metus. Vivamus suscipit
          at lacus nec commodo. Fusce suscipit orci eu neque vestibulum, eu euismod lacus hendrerit.
          Morbi varius, nisl ut vehicula ultrices, dolor nibh maximus sapien, vitae sagittis purus
          purus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet cursus
          elit. Quisque euismod lectus eu mauris consectetur tempor. In eget suscipit nisl, quis
          rhoncus turpis. Donec ut dui finibus, vehicula elit nec, placerat nulla. Duis porta nibh a
          varius venenatis. Sed eros augue, imperdiet id semper quis, ultricies ac nisi. Quisque et
          ultrices lacus, et lacinia neque. Nam gravida magna nec porta egestas. Curabitur sit amet
          magna felis. Proin est quam, elementum vel sodales eget, porta in sapien. Cras tempor
          tortor eget varius mattis. Sed posuere ligula eu bibendum tincidunt. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta eros ac
          dolor finibus, et accumsan urna pulvinar. Aliquam scelerisque pretium tellus, sit amet
          consequat dolor pretium ut. Fusce tincidunt, risus quis gravida sagittis, nulla enim
          ullamcorper nibh, mattis tempus metus velit eget leo. Curabitur varius dictum interdum. In
          sit amet volutpat metus. Ut a egestas arcu. Nam luctus nulla sit amet sem dignissim
          gravida. Quisque cursus nec ante ac suscipit. Donec vestibulum purus vitae augue aliquam
          tempus quis nec nunc. Aenean non metus id libero posuere aliquet vel porttitor est. Sed
          eros justo, feugiat ut finibus nec, bibendum rutrum libero. Nulla volutpat condimentum
          libero vel finibus. Curabitur tincidunt felis id laoreet ullamcorper. Duis gravida, metus
          et imperdiet facilisis, urna odio rhoncus nisl, sed tincidunt nunc augue vitae dui.
          Curabitur interdum ex neque, sit amet scelerisque velit hendrerit nec. Pellentesque sem
          turpis, mollis at metus at, semper mattis lectus. Phasellus sed metus risus. Aenean
          elementum dignissim nisi, nec elementum quam. Donec id mauris neque. Proin velit nisl,
          condimentum in pulvinar a, consequat et leo. Nullam congue nulla turpis, ut mollis orci
          venenatis tempor. Vestibulum a pretium nunc. Vestibulum tincidunt erat laoreet
          pellentesque imperdiet. Morbi imperdiet euismod lacus eleifend commodo. Fusce malesuada
          luctus porta. Aenean consectetur massa sit amet enim sollicitudin, ut semper urna
          sagittis. Curabitur rhoncus egestas sapien porta aliquam. Nunc sodales augue vitae
          faucibus euismod. Nunc tempus lacus vitae urna semper scelerisque. Phasellus condimentum
          bibendum posuere. Phasellus sit amet odio justo. Etiam quis ornare metus. Vivamus suscipit
          at lacus nec commodo. Fusce suscipit orci eu neque vestibulum, eu euismod lacus hendrerit.
          Morbi varius, nisl ut vehicula ultrices, dolor nibh maximus sapien, vitae sagittis purus
          purus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet cursus
          elit. Quisque euismod lectus eu mauris consectetur tempor. In eget suscipit nisl, quis
          rhoncus turpis. Donec ut dui finibus, vehicula elit nec, placerat nulla. Duis porta nibh a
          varius venenatis. Sed eros augue, imperdiet id semper quis, ultricies ac nisi. Quisque et
          ultrices lacus, et lacinia neque. Nam gravida magna nec porta egestas. Curabitur sit amet
          magna felis. Proin est quam, elementum vel sodales eget, porta in sapien. Cras tempor
          tortor eget varius mattis. Sed posuere ligula eu bibendum tincidunt. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta eros ac
          dolor finibus, et accumsan urna pulvinar. Aliquam scelerisque pretium tellus, sit amet
          consequat dolor pretium ut. Fusce tincidunt, risus quis gravida sagittis, nulla enim
          ullamcorper nibh, mattis tempus metus velit eget leo. Curabitur varius dictum interdum. In
          sit amet volutpat metus. Ut a egestas arcu. Nam luctus nulla sit amet sem dignissim
          gravida. Quisque cursus nec ante ac suscipit. Donec vestibulum purus vitae augue aliquam
          tempus quis nec nunc. Aenean non metus id libero posuere aliquet vel porttitor est. Sed
          eros justo, feugiat ut finibus nec, bibendum rutrum libero. Nulla volutpat condimentum
          libero vel finibus. Curabitur tincidunt felis id laoreet ullamcorper. Duis gravida, metus
          et imperdiet facilisis, urna odio rhoncus nisl, sed tincidunt nunc augue vitae dui.
          Curabitur interdum ex neque, sit amet scelerisque velit hendrerit nec. Pellentesque sem
          turpis, mollis at metus at, semper mattis lectus. Phasellus sed metus risus. Aenean
          elementum dignissim nisi, nec elementum quam. Donec id mauris neque. Proin velit nisl,
          condimentum in pulvinar a, consequat et leo. Nullam congue nulla turpis, ut mollis orci
          venenatis tempor. Vestibulum a pretium nunc. Vestibulum tincidunt erat laoreet
          pellentesque imperdiet. Morbi imperdiet euismod lacus eleifend commodo. Fusce malesuada
          luctus porta. Aenean consectetur massa sit amet enim sollicitudin, ut semper urna
          sagittis. Curabitur rhoncus egestas sapien porta aliquam. Nunc sodales augue vitae
          faucibus euismod. Nunc tempus lacus vitae urna semper scelerisque. Phasellus condimentum
          bibendum posuere. Phasellus sit amet odio justo. Etiam quis ornare metus. Vivamus suscipit
          at lacus nec commodo. Fusce suscipit orci eu neque vestibulum, eu euismod lacus hendrerit.
          Morbi varius, nisl ut vehicula ultrices, dolor nibh maximus sapien, vitae sagittis purus
          purus nec
        </p>
      </AboutMeWrapper>
    </>
  );
};
export default AboutMe;
