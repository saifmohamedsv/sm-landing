import React, { useEffect, useState } from "react";
import styled from "styled-components";
import navLogo from "../assets/icons/logo.png";
import MenuIcon from "../assets/icons/menu.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 150px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    z-index: 999;
    background-color: transparent;
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
  font-size: 2.0833333333333335vw;
  font-family: "BoldNetflix";
  margin: 0 !important;
  cursor: pointer;
  color: #643fdb;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 1px;
    color: #fff;
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
const MobileMenuIcon = styled.img`
  max-width: 32px;
  color: #fff;
`;
const MobileLinksContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #ffff;
  color: #643fdb;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border-radius: 18px 0 0 18px;
`;
const Link = styled.a`
  text-decoration: none;
  color: #643fdb;
  font-family: "MediumNetflix";
  font-size: 1.2vw;
  text-transform: capitalize;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
const Button = styled.button`
  border: none;
  line-height: 140%;
  font-size: 1vw;
  font-family: "MediumNetflix";
  padding: 12px 32px;
  background-color: #643fdb;
  color: #fff;
  border: 1px solid #643fdb;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #643fdb;
  }
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
function Navbar() {
  const [mobileV, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [mobActive, setMobActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);
  return (
    <Container>
      <LogoContainer>
        <LogoText>SPORSEPETi</LogoText>
      </LogoContainer>
      {!mobileV && (
        <>
          <LinksContainer>
            <Link href="/">Anasayfa</Link>
            <Link href="#About">Hakkımızda</Link>
            <Link href="#Contact">İletişim</Link>
          </LinksContainer>
        </>
      )}
      {mobileV && (
        <MobileMenuIcon
          src={MenuIcon}
          onClick={() => {
            setMobActive(!mobActive);
          }}
        />
      )}
      {mobActive && (
        <MobileLinksContainer>
          <Link href="/">home</Link>
          <Link href="#About">about</Link>
          <Link href="#Contact">contact us</Link>
          <a href="">
            <Button>Sign In</Button>
          </a>
        </MobileLinksContainer>
      )}
    </Container>
  );
}

export default Navbar;
