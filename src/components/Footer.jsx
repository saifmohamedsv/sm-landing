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
          <Logo>Main</Logo>
          <FooterLink href="">Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Legal</Logo>
          <FooterLink>Privacy Policy </FooterLink>
          <FooterLink>Termes & Condintions</FooterLink>
          <FooterLink>FAQs</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Support</Logo>
          <FooterLink>+0975 2105 1245</FooterLink>
          <FooterLink>Villa Medici, Yorba Linda, CA 92886, USA</FooterLink>
        </Col>{" "}
        <Col lg={6} md={8} sm={12} xs={12}>
          <Logo>Mobile app</Logo>
          <img src={GooglePlay} style={DownloadsClass} />
          <img src={AppleStore} style={DownloadsClass} />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
