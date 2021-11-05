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
    title: "Maç Rezerve Et",
    desc: "İlk adım + butonuna tıklayarak tüm sahayı rezerve edebilirsiniz veya takım olarak sisteme giriş yapabilirsiniz.",
  },
  {
    id: 2,
    img: icon2,
    title: "Spor Branşını Seç",
    desc: "İkinci adım ise yapmak istediğiniz sporu seçebilirsiniz.(Futbol, paintball, lasertag, karting)",
  },
  {
    id: 3,
    img: icon3,
    title: "Tarihi ve Zamanı Seç",
    desc: "Müsait olduğunuz zamanı, gidebileceğiniz yeri ve tarihi seçebilirsiniz!",
  },
  {
    id: 4,
    img: icon4,
    title: "Choose Facilty",
    desc: "Önünüze çıkan spor tesislerinden birini seçmek için hazırsınız. İstediğiniz özellikleri filtreleyerek sana uygun olan sahayı bulabilirsiniz! ",
  },
  {
    id: 5,
    img: icon5,
    title: "Invite Freinds",
    desc: "Oynamak istediğiniz arkadaşlarınızı takıma dahil edebilirsiniz!",
  },
  {
    id: 6,
    img: icon6,
    title: "payment",
    desc: "Son adım ise iyzico ile kredi kartı ile ödeme yapabilirsiniz!",
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
const HowItWorksTitle = styled.span`
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
        <HowItWorksTitle>NASIL ÇALIŞIR</HowItWorksTitle>
        <Divider src={divider} />
      </Header>
      <SubTitle>
        Sporsepetinde maç rezervasyonu yapmanıza yardımcı olabilecek daha fazla
        bilgi edinmek ister misiniz? Uygulamamızın ne hakkında olduğunu öğrenmek
        için bu adımları izleyebilirsiniz!
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
              <img width="50px" src={res.img} style={{ marginTop: "12px" }} />
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
