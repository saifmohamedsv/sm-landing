import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import ImageWallpaper from "../assets/photos/pexels-thisisengineering-3861958.png";
const Stats = [
  {
    id: 1,
    data: "13+",
    title: "Uygulamanın İndirilmesi",
  },
  {
    id: 2,
    data: "12,483",
    title: "Kayıtlı Kullanıcılar",
  },
  {
    id: 3,
    data: "45+",
    title: "Kayıtlı Spor Tesisi ",
  },
  {
    id: 4,
    data: "45+",
    title: "Uygulamanın Yıldızı",
  },
];
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 24px 140px;
  display: flex;
  justify-content: center;
  background-color: rgba(235, 230, 253, 0.8);
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
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
  background-color: rgba(235, 230, 253, 0.8);
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
`;
const StatsTitle = styled.h1`
  font-size: 48px;
  font-family: "BoldNetflix";
  color: #643fdb;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
const StatsSubTitle = styled.h1`
  font-size: 22px;
  font-family: "RegularNetflix";
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
function Statistics() {
  return (
    <Container
      style={{
        background: `url(${ImageWallpaper}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Gradient />
      <Row
        gutter={[48, 48]}
        align="center"
        justify="space-between"
        style={{ width: "100%" }}
      >
        {Stats.map((res, index) => (
          <>
            <Col
              key={index}
              lg={6}
              sm={8}
              xs={12}
              align="center"
              style={
                index === 3
                  ? { borderRight: "none" }
                  : { borderRight: "0px solid #643fdb" }
              }
            >
              {" "}
              <StatsTitle>{res.data}</StatsTitle>
              <StatsSubTitle>{res.title}</StatsSubTitle>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Statistics;
