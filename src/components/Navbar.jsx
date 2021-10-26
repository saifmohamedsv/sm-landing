import React from "react";
import styled from "styled-components";
import navLogo from "../assets/icons/logo.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 32px 150px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 24px 24px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;
const LogoImage = styled.img`
  width: 32px;
  @media screen and (max-width: 768px) {
    width: 24px;
  }
`;
const LogoText = styled.h1`
  font-size: 32px;
  font-family: "BoldNetflix";
  color: #643fdb;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 1px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: #643fdb;
  font-family: "MediumNetflix";
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  line-height: 140%;
  font-size: 13px;
  font-family: "MediumNetflix";
  width: 140px;
  height: 40px;
  background-color: #643fdb;
  color: #fff;
  border: 1px solid #643fdb;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #643fdb;
  }
`;
function Navbar() {
  return (
    <Container>
      {/* LOGO CONTAINER  */}
      <LogoContainer>
        {/* <LogoImage src={navLogo} /> */}
        <LogoText>SPORSEPETi</LogoText>
      </LogoContainer>
      {/* LINKS CONTAINER  */}
      <LinksContainer>
        <Link href="/">home</Link>
        <Link href="#About">about</Link>
        <Link href="#Contact">contact us</Link>
      </LinksContainer>
      {/* Button CONTAINER  */}
      <a href="">
        <Button>Sign In</Button>
      </a>
    </Container>
  );
}

export default Navbar;
