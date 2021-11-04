import React, { useEffect, useState } from "react";
import divider from "../assets/icons/divider.png";
import styled from "styled-components";
import FeaturesImage from "../assets/photos/FeaturesImage.png";
import MobileImage from "../assets/photos/carousel1.png";
import MatchMaking from "../assets/icons/matchmaking.png";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 24px 32px;
  }
`;
const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #ecf2ff;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  @media screen and (max-width: 768px) {
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  }
`;
const ContentContainer = styled.div`
  margin: 180px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 768px) {
    margin: 100px 0;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
const FeaturesTitle = styled.span`
  font-size: 2vw;
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
  line-height: 20px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
const FeaturesBackground = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileVContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 24px 1rem 24px;
`;
const MobileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.al};
  gap: 12px;
  width: 100%;
`;
const CardTitle = styled.span`
  font-size: 2vw;
  color: #1c1243;
  font-family: "MediumNetflix";
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;
const CardSubTitle = styled.span`
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
const CardImage = styled.img`
  max-width: 32px;
`;
function Features() {
  const [screenSize, setScreenSize] = useState(null);
  const [mobileV, setActiveMenu] = useState(false);

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
      <Gradient />
      <ContentContainer>
        <Header>
          <FeaturesTitle>MUHTEŞEM ÖZELLİKLER</FeaturesTitle>
          <Divider src={divider} />
        </Header>{" "}
        <SubTitle>
          Kullanıcılarımızı sonuna kadar desteklemek için elimizden gelenin en
          iyisini yapmaya çalışıyoruz. Sürekli uygulamamızı geliştiriyoruz ve
          yeni kullanıcılarımızdan gelen tavsiyeler yoluyla daha da ileri
          gideceğimize emin olabilirsiniz. Sizleri de aramızda görmeyi çok
          isteriz!
        </SubTitle>
        <FeaturesBackground src={FeaturesImage} />
        {mobileV && (
          <MobileVContainer>
            <img style={{ maxWidth: "100%" }} src={MobileImage} />

            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>Eşleştirme Sistemi</CardTitle>
              <CardSubTitle ta="end">
                Eşleştirme sistemi ile en sevdiğiniz spor için müsait
                saatlerinizde arkadaşlarınızla ve başkaları ile maç yapabilme
                şansını yakalayabilirsiniz.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>Arkadaşlarınla Oyna</CardTitle>
              <CardSubTitle ta="start">
                Arkadaşlarınızı takip edebilir, anılarını paylaşabilirsiniz.
                Sevdiğiniz sporla ilgili yeni arkadaşlar edinebilirsiniz.
                Arkadaşlarınızla spor organizasyonlarına katılabilirsiniz aynı
                zamanda yeni kişilerle maç yapabilme şansınız da olur.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>Saha Rezervasyonu</CardTitle>
              <CardSubTitle ta="end">
                Klasik bir yöntem olan, tüm sahayı rezerve edip, müsait
                zamanında arkadaşlarınızla maç yapabilirsiniz.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>Maç Bul</CardTitle>
              <CardSubTitle ta="start">
                Eşleştirme sistemine müsait zamanlarınızı girerek eksik oyuncusu
                olan takımlara dahil olabilirsiniz!
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>Sosyal Medya Modülü</CardTitle>
              <CardSubTitle ta="end">
                Maç sonrasında videolarınızı ve resimlerinizi paylaşabileceğiniz
                bir spor sosyal medyası sizce de güzel olmaz mıydı?
                Arkadaşlarınızın nasıl yarıştığını, nasıl gol attığını görmek
                istemez misiniz? Yeni kişilerle tanışabilir, takipleşebilir bir
                sonraki maçlarda onları da ekleyebilirsiniz!
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>İstatistik</CardTitle>
              <CardSubTitle ta="start">
                Her spor organizasyonu sonrasında sportif verilerinizi takip
                edip gelişiminizin daha iyi olmasını istemez misiniz?
                Arkadaşlarınızın istatistiklerinizi görebilir, kendinizinkini
                paylaşabilirsiniz!
              </CardSubTitle>
            </MobileCard>
          </MobileVContainer>
        )}
      </ContentContainer>
    </Container>
  );
}

export default Features;
