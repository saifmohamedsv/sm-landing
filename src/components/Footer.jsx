import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import GooglePlay from "../assets/icons/whitegoogleplay.png";
import AppleStore from "../assets/icons/applestore.png";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const IconClass = {
  fontSize: "20px",
  color: "#fff",
};
const DownloadsClass = {
  width: "200px",
  margin: "24px 0",
};
const Container = styled.div`
  width: 100%;
  background-color: #643fdb;
  padding: 60px 140px;
  @media screen and (max-width: 768px) {
    padding: 32px;
  }
`;
const Logo = styled.h1`
  font-size: 24px;
  font-family: "BoldNetflix";
  color: #fff;
  letter-spacing: 1px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Desc = styled.h1`
  font-family: "RegularNetflix";
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 0.7px;
  max-width: 200px;
  color: #fff;
  margin: 24px 0;
`;
const FooterLink = styled.p`
  cursor: pointer;
  font-family: "RegularNetflix";
  text-decoration: none;
  font-size: 17px;
  letter-spacing: 0.7px;
  color: #fff;
  margin: 24px 0;
`;
function Footer() {
  return (
    <Container id="Contact">
      <Row gutter={[48, 48]} align="flex-start" justify="space-between">
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Sporsepeti</Logo>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Desc>
          <Row style={{ width: "100%", gap: "24px" }}>
            <FacebookFilled style={IconClass} />
            <InstagramFilled style={IconClass} />
            <TwitterSquareFilled style={IconClass} />
          </Row>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Başlıca</Logo>
          <FooterLink href="">Anasayfa</FooterLink>
          <FooterLink>Hakkımızda</FooterLink>
          <FooterLink>İletişim</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Yasal</Logo>
          <FooterLink>Gizlilik Politikası</FooterLink>
          <FooterLink>Şartlar Ve Koşullar</FooterLink>
          <FooterLink>SSS</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Yardım</Logo>
          <FooterLink>+90 531 497 19 15</FooterLink>
          <FooterLink>Bilişim Vadisi Açık alan No: 75 İstanbul, TR</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Mobil uygulama</Logo>
          <img src={GooglePlay} style={DownloadsClass} />
          <img src={AppleStore} style={DownloadsClass} />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
