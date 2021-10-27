import React from "react";
import styled from "styled-components";
import divider from "../assets/icons/divider.png";
import phoneImages from "../assets/photos/mobilesImage.png";
import AppleStore from "../assets/icons/applestore.png";
import GoogleStore from "../assets/icons/googleplay.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 140px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
const AboutTitle = styled.h1`
  margin: 0 !important;

  font-size: 30px;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
`;
const Divider = styled.img`
  width: 120px;
`;
const SubTitle = styled.p`
  font-size: 14px;
  font-family: "RegularNetflix";
  color: #686868;
  line-height: 20px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;
const Content = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ContentImage = styled.img`
  /* max-width: 580px; */
  width: 40vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  text-align: start;
  width: 100%;
  height: 100%;
`;
const DetailsTitle = styled.h1`
  font-size: 24px;
  color: #1c1243;
  font-family: "RegularNetflix";
`;
const DetailsSubTitle = styled.p`
  font-size: 14px;
  color: #686868;
  max-width: 520px;
  line-height: 20px;
  font-family: "RegularNetflix";
`;
const Butttons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const Button = styled.img`
  cursor: pointer;
  width: 140px;
`;
function About() {
  return (
    <Container>
      <Header>
        <AboutTitle>About Our App</AboutTitle>
        <Divider src={divider} />
      </Header>
      <SubTitle>
        The sports app's mission is to bring people and service sports companies
        together by enabling them to easily book their services online no matter
        where they are or when they want to book!
      </SubTitle>
      <Content>
        <ContentImage src={phoneImages} />
        <ContentDetails>
          <DetailsTitle>Take a Look Around our App </DetailsTitle>
          <DetailsSubTitle>
            Sport app" is Turkey’s leading search and booking platform for
            recreational sports. Our mission is making it easier for everyone to
            play sport, and increasing the utilization of facilities as a
            result. We are proud to welcome the early risers, last-minuters,
            part-timers, full-timers, first-timers to the "sport app" sporting
            community. We know the urban work-life balance isn’t always easy to
            juggle and our service takes the hassle away from finding places to
            play. Sport plays a pivotal role in bringing people together,
            sharing moments, and enhancing well-being. Find your play. Go from
            thought to sport. A few taps and swipes on our app transports people
            to sports facilities where they can bang in a goal or swipe at a
            karting amongst friends. We make playing sport simple across turkey
            . Have you made your account in "sport app "?
          </DetailsSubTitle>
          <Butttons>
            <Button src={AppleStore} />
            <Button src={GoogleStore} />
          </Butttons>
        </ContentDetails>
      </Content>
    </Container>
  );
}

export default About;
