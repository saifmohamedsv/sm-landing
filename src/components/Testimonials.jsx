import React, { useEffect, useState } from "react";
import divider from "../assets/icons/divider.png";
import styled from "styled-components";
import testImage from "../assets/photos/TestimonialPic.png";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const images = [
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Saif Mohamed",
    img: testImage,
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Mehmet Emre",
    img: testImage,
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Alex White",
    img: testImage,
  },
];
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 24px 140px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 32px;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const Header = styled.div`
  position: relative;
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

const CarouselContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  width: 98vw;
  padding: 32px;
  gap: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    top: 15%;
    padding: 12px;
    gap: 12px;
    width: 100%;
  }
`;
const Card = styled.div`
  padding: 32px 24px;
  width: 100%;
  max-width: 480px;
  border: 2px solid #643fdb;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  justify-content: space-between;
`;
const TestiDesc = styled.p`
  font-size: 15px;
  font-family: "RegularNetflix";
  text-align: center;
`;
const UserCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;
function Testimonials() {
  const [carousel, setCarousel] = useState(1);
  const [active, setActive] = useState(images[0]);
  const [mobileV, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

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
        <AppScreenShotTitle>What Our Users Say</AppScreenShotTitle>
        <Divider src={divider} />
      </Header>
      {!mobileV && (
        <CarouselContainer>
          <LeftCircleFilled
            style={{ fontSize: "32px", color: "#643fdb", userSelect: "none" }}
            onClick={prevSlide}
          />
          {images.map((image, index) => {
            return (
              <>
                {index === carousel && (
                  <Card
                    key={index}
                    onClick={() => {
                      onSelect(index);
                    }}
                  >
                    <TestiDesc>
                      Çok güzel düşünülmüş, umarım fikir hayata geçtiğinde de
                      gelişimi sürer
                    </TestiDesc>
                    <UserCard>
                      <h3>{image.name}</h3>
                      <img src={image.img} width="48px" />
                    </UserCard>
                  </Card>
                )}
              </>
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
            style={{ fontSize: "24px", color: "#643fdb", userSelect: "none" }}
            onClick={prevSlide}
          />
          {images.map((image, index) => {
            return (
              <>
                {index === carousel && (
                  <Card
                    key={index}
                    onClick={() => {
                      onSelect(index);
                    }}
                  >
                    <TestiDesc>
                      Çok güzel düşünülmüş, umarım fikir hayata geçtiğinde de
                      gelişimi sürer
                    </TestiDesc>
                    <UserCard>
                      <h3>{image.name}</h3>
                      <img src={image.img} width="48px" />
                    </UserCard>
                  </Card>
                )}
              </>
            );
          })}
          <RightCircleFilled
            style={{ fontSize: "24px", color: "#643fdb", userSelect: "none" }}
            onClick={nextSlide}
          />
        </CarouselContainer>
      )}
    </Container>
  );
}

export default Testimonials;
