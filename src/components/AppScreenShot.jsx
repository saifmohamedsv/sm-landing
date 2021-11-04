import React, { useState, useEffect } from "react";
import divider from "../assets/icons/divider.png";
import styled from "styled-components";
import carousel1 from "../assets/photos/carousel1.png";
import carousel2 from "../assets/photos/carousel2.png";
import carousel3 from "../assets/photos/carousel3.png";
import carousel4 from "../assets/photos/carousel4.png";
import carousel5 from "../assets/photos/carousel5.png";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const images = [
  {
    id: 0,
    img: carousel1,
  },
  {
    id: 1,
    img: carousel2,
  },
  {
    id: 2,
    img: carousel3,
  },
  {
    id: 3,
    img: carousel4,
  },
  {
    id: 4,
    img: carousel5,
  },
];
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 140px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 24px;
    /* height: 100vh; */
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
const AppScreenShotTitle = styled.span`
  font-size: 2vw;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;
const Divider = styled.img`
  width: 120px;
`;
const SubTitle = styled.p`
  font-size: 1vw;
  font-family: "RegularNetflix";
  color: #686868;
  line-height: 20px;
  text-align: ${(props) => props.ta};
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
const CarouselContainer = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0;
    /* position: absolute;   */
    /* top: 50%;   */
    /* left: -50%;   */
  }
`;
const CarouselImage = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) {
    /* width: 140px; */
  }
`;
function AppScreenShot() {
  const [mobileV, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  const [carousel, setCarousel] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCarousel(carousel === length - 1 ? 0 : carousel + 1);
  };

  const prevSlide = () => {
    setCarousel(carousel === 0 ? length - 1 : carousel - 1);
  };

  const onSelect = (index) => {
    setCarousel(index);
  };

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

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <Container>
      <Header>
        <AppScreenShotTitle>Uygulamanın Ekran Görüntüleri</AppScreenShotTitle>
        <Divider src={divider} />
        <SubTitle ta="center">
          Spor yapmak için daha fazla gecikmeyin! Zaman kaybetmeden bir spor
          organizasyonuna dahil olmak istemez misiniz? Tek yapman gereken
          uygulamayı indirip başlamak…
        </SubTitle>
      </Header>
      {!mobileV && (
        <CarouselContainer>
          <LeftCircleFilled
            style={{ fontSize: "32px", color: "#643fdb", userSelect: "none" }}
            onClick={prevSlide}
          />
          {images.map((image, index) => {
            return (
              <div
                key={index}
                style={
                  index === carousel
                    ? {
                        opacity: "1",
                        transition: "all ease-in-out .4s",
                        transform: "scale(1.2)",
                      }
                    : {
                        opacity: "0.2",
                        transition: "all ease-in-out .4s",
                      }
                }
                onClick={() => {
                  onSelect(index);
                }}
              >
                <CarouselImage src={image.img} />
              </div>
            );
          })}
          <RightCircleFilled
            style={{ fontSize: "32px", color: "#643fdb", userSelect: "none" }}
            onClick={nextSlide}
          />
        </CarouselContainer>
      )}
      {mobileV && (
        <CarouselContainer>
          <LeftCircleFilled
            style={{ fontSize: "32px", color: "#643fdb", userSelect: "none" }}
            onClick={prevSlide}
          />
          {images
            .filter((img) => img.id === carousel)
            .map((res) => (
              <CarouselImage src={res.img} alt="" />
            ))}
          <RightCircleFilled
            style={{ fontSize: "32px", color: "#643fdb", userSelect: "none" }}
            onClick={nextSlide}
          />
        </CarouselContainer>
      )}
    </Container>
  );
}

export default AppScreenShot;
