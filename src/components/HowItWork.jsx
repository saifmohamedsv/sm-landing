import React from "react";
import styled from "styled-components";
import divider from "../assets/icons/divider.png";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import { Col, Row } from "antd";

const Arr = [
  {
    id: 1,
    img: icon1,
    title: "Match Making",
    desc: "The first step you will do is press 'Add' from the toolbar to choose Reserve  match or Find a team to play with or Start Activity Llike Running .",
  },
  {
    id: 2,
    img: icon2,
    title: "Select Sport",
    desc: "The second step is to choose your favorite sport, whether football, paintball, lasertag or karting, to start playing it with your friends.",
  },
  {
    id: 3,
    img: icon3,
    title: "choose Time , Date , Location",
    desc: "Third is to choose the right days and time to search for the nearest available date for booking, and you can also search and see the nearest facilities available near you",
  },
  {
    id: 4,
    img: icon4,
    title: "Choose Facilty",
    desc: "After that , it will show you the nearest facilities in terms of dates and locations, and you can view each facility and see the available features, price and all the information about it and book it .",
  },
  {
    id: 5,
    img: icon5,
    title: "Invite Freinds",
    desc: "You can then add your own friends on the App or from abroad and send them invitations to join you to play.",
  },
  {
    id: 6,
    img: icon6,
    title: "payment",
    desc: "The last step you will take is to choose the payment method, whether it is iyzico, MasterCard or Visa , To complete the booking process",
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
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
const HowItWorksTitle = styled.h1`
  font-size: 30px;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
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
`;
const CardTitle = styled.h1`
  font-size: 18px;
  color: #643fdb;
  font-family: "BoldNetflix";
`;
const CardDesc = styled.h1`
  font-size: 15px;
  color: #686868;
  font-family: "RegularNetflix";
`;
function HowItWork() {
  return (
    <Container>
      <Header>
        <HowItWorksTitle>HOW IT WORK</HowItWorksTitle>
        <Divider src={divider} />
      </Header>
      <SubTitle>
        Want to learn more about how the Spot App can help you book or join your
        match ? Follow these steps to find out what our app is all about
      </SubTitle>
      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        {Arr.map((res) => (
          <Col key={res.id} lg={8} sm={12} xs={24}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
              }}
            >
              <img width="50px" src={res.img} />
              <Col>
                <CardTitle>{res.title}</CardTitle>
                <CardDesc>{res.desc}</CardDesc>
              </Col>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HowItWork;
