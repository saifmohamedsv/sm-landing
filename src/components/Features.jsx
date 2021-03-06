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
          <FeaturesTitle>MUHTE??EM ??ZELL??KLER</FeaturesTitle>
          <Divider src={divider} />
        </Header>{" "}
        <SubTitle>
          Kullan??c??lar??m??z?? sonuna kadar desteklemek i??in elimizden gelenin en
          iyisini yapmaya ??al??????yoruz. S??rekli uygulamam??z?? geli??tiriyoruz ve
          yeni kullan??c??lar??m??zdan gelen tavsiyeler yoluyla daha da ileri
          gidece??imize emin olabilirsiniz. Sizleri de aram??zda g??rmeyi ??ok
          isteriz!
        </SubTitle>
        <FeaturesBackground src={FeaturesImage} />
        {mobileV && (
          <MobileVContainer>
            <img style={{ maxWidth: "100%" }} src={MobileImage} />

            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>E??le??tirme Sistemi</CardTitle>
              <CardSubTitle ta="end">
                E??le??tirme sistemi ile en sevdi??iniz spor i??in m??sait
                saatlerinizde arkada??lar??n??zla ve ba??kalar?? ile ma?? yapabilme
                ??ans??n?? yakalayabilirsiniz.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>Arkada??lar??nla Oyna</CardTitle>
              <CardSubTitle ta="start">
                Arkada??lar??n??z?? takip edebilir, an??lar??n?? payla??abilirsiniz.
                Sevdi??iniz sporla ilgili yeni arkada??lar edinebilirsiniz.
                Arkada??lar??n??zla spor organizasyonlar??na kat??labilirsiniz ayn??
                zamanda yeni ki??ilerle ma?? yapabilme ??ans??n??z da olur.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>Saha Rezervasyonu</CardTitle>
              <CardSubTitle ta="end">
                Klasik bir y??ntem olan, t??m sahay?? rezerve edip, m??sait
                zaman??nda arkada??lar??n??zla ma?? yapabilirsiniz.
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>Ma?? Bul</CardTitle>
              <CardSubTitle ta="start">
                E??le??tirme sistemine m??sait zamanlar??n??z?? girerek eksik oyuncusu
                olan tak??mlara dahil olabilirsiniz!
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-end">
              <CardImage src={MatchMaking} />
              <CardTitle>Sosyal Medya Mod??l??</CardTitle>
              <CardSubTitle ta="end">
                Ma?? sonras??nda videolar??n??z?? ve resimlerinizi payla??abilece??iniz
                bir spor sosyal medyas?? sizce de g??zel olmaz m??yd???
                Arkada??lar??n??z??n nas??l yar????t??????n??, nas??l gol att??????n?? g??rmek
                istemez misiniz? Yeni ki??ilerle tan????abilir, takiple??ebilir bir
                sonraki ma??larda onlar?? da ekleyebilirsiniz!
              </CardSubTitle>
            </MobileCard>
            {/* ===================================================== */}
            <MobileCard al="flex-start">
              <CardImage src={MatchMaking} />
              <CardTitle>??statistik</CardTitle>
              <CardSubTitle ta="start">
                Her spor organizasyonu sonras??nda sportif verilerinizi takip
                edip geli??iminizin daha iyi olmas??n?? istemez misiniz?
                Arkada??lar??n??z??n istatistiklerinizi g??rebilir, kendinizinkini
                payla??abilirsiniz!
              </CardSubTitle>
            </MobileCard>
          </MobileVContainer>
        )}
      </ContentContainer>
    </Container>
  );
}

export default Features;
