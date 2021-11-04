import React from "react";
import styled from "styled-components";
import divider from "../assets/icons/divider.png";
import phoneImages from "../assets/photos/mobilesImage.png";
import AppleStore from "../assets/icons/applestore.png";
import GoogleStore from "../assets/icons/googleplay.png";
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
const AboutTitle = styled.span`
  margin: 0 !important;
  font-size: 1.953125vw;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;
const Divider = styled.img`
  width: 120px;
`;
const SubTitle = styled.p`
  font-size: 1vw;
  font-family: "RegularNetflix";
  color: #686868;
  line-height: 140%;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;
const Content = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ContentImage = styled.img`
  /* max-width: 580px; */
  width: 40vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: start;
  width: 100%;
  height: 100%;
`;
const DetailsTitle = styled.span`
  font-size: 1.5625vw;
  color: #1c1243;
  font-family: "BoldNetflix";
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    font-size: 4.8vw;
  }
`;
const DetailsSubTitle = styled.p`
  font-size: 1vw;
  color: #686868;
  max-width: 75%;
  line-height: 140%;
  margin: 0 !important;
  font-family: "RegularNetflix";
  @media screen and (max-width: 768px) {
    font-size: 3.8vw;
    max-width: 100%;
  }
`;
const Butttons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Button = styled.img`
  cursor: pointer;
  width: 140px;
`;
function About() {
  return (
    <Container id="About">
      <Header>
        <AboutTitle>UYGULAMAMIZ HAKKINDA</AboutTitle>
        <Divider src={divider} />
      </Header>
      <SubTitle>
        Sporsepeti ile kolayca rezervasyon yapabilir, anılarını sosyal medya
        kısmında paylaşabilir ve istatistiklerine ulaşabilirsin
      </SubTitle>
      <Content>
        <ContentImage src={phoneImages} />
        <ContentDetails>
          <DetailsTitle>Uygulamamıza Bir Göz Atın</DetailsTitle>
          <DetailsSubTitle>
            Sporsepeti Türkiye’de spor tesislerine bir çok branşta rezervasyon
            yapmanızı sağlayacak bir uygulamadır.
            <br />
            <br />
            Halısaha maçı, paintball maçı, karting yarışı ve lasertag gibi
            aktiviteler yapmak istediğinizde bir çok sorunla karşılaşıyorsunuz.
            Spor sahası bul, hangi saatler müsaitmiş sor, arkadaş bul,… derken
            zamanınızdan gidiyor. Sporsepeti sayesinde tek kişi bile olsanız
            başkaları ile maçlara katılabilir, takımınızla maçlara katılım
            gösterebilir veya tüm sahayı rezerve edebilirsiniz.
            <br />
            <br />
            Sizin sevdiğiniz branşları seven kişileri takip edebilir, resim veya
            video paylaşabilirsiniz. Maç sonunda istatistiklerinize bakıp
            gelişiminizi artırabilirsiniz.
          </DetailsSubTitle>
          <Butttons>
            <Button src={AppleStore} />
            <Button src={GoogleStore} />
          </Butttons>
        </ContentDetails>
      </Content>
    </Container>
  );
}

export default About;
