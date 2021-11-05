import React from "react";
import styled from "styled-components";
import PhoneImage from "../assets/photos/heroImage.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
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
    margin-top: 30%;
  }
`;
const HeroData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const HeroName = styled.h1`
  font-size: 3.6vw;
  font-family: "BoldNetflix";
  color: #fff;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;
const HeroTitle = styled.span`
  font-size: 2vw;
  font-family: "BoldNetflix";
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;
const HeroSubTitle = styled.span`
  font-size: 1.2vw;
  line-height: 140%;
  font-family: "ThinNetflix";
  color: #fff;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
const Button = styled.button`
  border: none;
  line-height: 140%;
  font-size: 1vw;
  font-family: "MediumNetflix";
  max-width: 220px;
  min-height: 50px;
  padding: 12px 32px;
  margin-top: 32px;
  background-color: #fff;
  color: #643fdb;
  border: 1px solid #fff;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  /* &:hover {
    background-color: transparent;
    color: #fff;
  } */
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    max-width: 180px;
    font-size: 3vw;
  }
`;
const HeroImage = styled.img`
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
function hero() {
  return (
    <Container>
      <Gradient />
      <ContentContainer>
        <HeroData>
          <HeroName>Sporsepeti</HeroName>
          <HeroTitle>
            Spor Tesisleri ile Spor Yapmak İsteyenleri Bir Araya Getiren
            Uygulama
          </HeroTitle>
          <HeroSubTitle>
            Arkadaşlarını çağır, spor sahasını ayırt, anılarını paylaş ve çok
            daha fazlası için
          </HeroSubTitle>
          <Button>Şimdi Başla</Button>
        </HeroData>
        <HeroImage src={PhoneImage} />
      </ContentContainer>
    </Container>
  );
}

export default hero;
