import React from "react";
import styled from "styled-components";
import PhoneImage from "../assets/photos/heroImage.png";
import { Row, Col } from "antd";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 95px);
  padding: 12px 140px;
  @media screen and (max-width: 768px) {
    padding: 32px 24px;
    height: 100%;
  }
`;
const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 95px);
  z-index: -1;
  background: linear-gradient(269.86deg, #b29aff 1.77%, #643fdb 99.8%);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 48px;
  }
`;
const HeroData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const HeroTitle = styled.h1`
  font-size: 3.6vw;
  font-family: "BoldNetflix";
  color: #fff;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
const HeroSubTitle = styled.h1`
  font-size: 1.2vw;
  line-height: 140%;
  margin: 0 !important;
  font-family: "ThinNetflix";
  color: #fff;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  border: none;
  line-height: 140%;
  font-size: 13px;
  font-family: "MediumNetflix";
  width: 180px;
  height: 50px;
  margin-top: 32px;
  background-color: #fff;
  color: #643fdb;
  border: 1px solid #fff;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
const HeroImage = styled.img`
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
function hero() {
  return (
    <Container>
      <Gradient />
      <ContentContainer>
        <HeroData>
          <HeroTitle>Sports Sporsepeti</HeroTitle>
          <HeroTitle>The Best App For Sports booking</HeroTitle>
          <HeroSubTitle>
            Search now and book your Pitch, track, soccer court <br /> and much
            more instantly
          </HeroSubTitle>
          <Button>Get Started</Button>
        </HeroData>
        <HeroImage src={PhoneImage} />
      </ContentContainer>
    </Container>
  );
}

export default hero;
