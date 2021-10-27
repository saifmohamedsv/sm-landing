import React from "react";
import divider from "../assets/icons/divider.png";
import styled from "styled-components";
import FeaturesImage from "../assets/photos/FeaturesImage.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #ecf2ff;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
`;
const ContentContainer = styled.div`
  margin: 180px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
const FeaturesTitle = styled.h1`
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
function Features() {
  return (
    <Container>
      <Gradient />
      <ContentContainer>
        <Header>
          <FeaturesTitle>AWESOME FEATURES</FeaturesTitle>
          <Divider src={divider} />
        </Header>{" "}
        <SubTitle>
          we do our Besr to support our Users all the way. We are constantly
          improving our features and are proud to say that most of our new users
          come through referrals from existing users . We look forward to having
          you, as one of our new users in the future!
        </SubTitle>
        <img src={FeaturesImage} />
      </ContentContainer>
    </Container>
  );
}

export default Features;
