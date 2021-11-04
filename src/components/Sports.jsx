import { Col, Row } from "antd";
import React from "react";
import paintball from "../assets/icons/paintball.png";
import football from "../assets/icons/football.png";
import karting from "../assets/icons/karting.png";
import lasertag from "../assets/icons/lasertag.png";
import divider from "../assets/icons/divider.png";
import styled from "styled-components";
const Stats = [
  {
    id: 1,
    img: football,
    title: "Football",
    subtitle:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem",
    height: "100%",
    width: "100%",
  },
  {
    id: 2,
    img: paintball,
    title: "Paintball",
    // height: "55px",
    // width: "46px",
    height: "100%",

    subtitle:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem",
  },
  {
    id: 3,
    img: karting,
    title: "Karting",
    // height: "55px",
    // width: "80px",
    // height: "55px",
    width: "110%",
    subtitle:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem",
  },
  {
    id: 4,
    img: lasertag,
    title: "Laser Tag",
    // height: "55px",
    // width: "46px",
    height: "100%",
    subtitle:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem",
  },
];
const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(235, 230, 253, 0.8);
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  @media screen and (max-width: 768px) {
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 24px 12px;
  }
`;

const ContentContainer = styled.div`
  margin: 180px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 768px) {
    margin: 100px 0;
    gap: 24px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;
const SportsTitle = styled.span`
  font-size: 30px;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
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
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 140%;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 48px 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  transition-duration: ease 1s;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    gap: 12px;
  }
`;
const CardImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 24px;
  background-color: #eff1f3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 12px;
    width: 60px;
    height: 60px;
  }
`;
const CardTitle = styled.span`
  font-size: 24px;
  font-family: "MediumNetflix";
  color: #1c1243;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const CardSubTitle = styled.span`
  font-size: 14px;
  font-family: "RegularNetflix";
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
function Sports() {
  return (
    <Container>
      <Gradient />
      <ContentContainer>
        <Header>
          <SportsTitle>SUPPORTED SPORTS</SportsTitle>
          <Divider src={divider} />
        </Header>
        <SubTitle>
          Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet,
          consectetur adipisicing incididunt.
        </SubTitle>

        <Row
          gutter={[48, 48]}
          align="center"
          justify="space-between"
          style={{ width: "100%" }}
        >
          {Stats.map((res) => (
            <>
              <Col
                key={res.id}
                lg={6}
                md={8}
                sm={12}
                xs={12}
                align="center"
                style={{ padding: "0 8px" }}
              >
                <Card>
                  <CardImageContainer>
                    <img
                      src={res.img}
                      width={res.width}
                      height={res.height}
                      alt=""
                    />
                  </CardImageContainer>
                  <CardTitle>{res.title}</CardTitle>
                  <CardSubTitle>{res.subtitle}</CardSubTitle>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </ContentContainer>
    </Container>
  );
}

export default Sports;
