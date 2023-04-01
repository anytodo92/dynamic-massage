import Price from "./Price";
import UberMich from "./UberMich";
import Kontakt from "./Kontakt";
import SimpleText from "../Common/SimpleText";
import Empty from "../Common/Empty";
import Card from "./Card";
import Text from "./Text";
import Banner from "../Common/Banner";
import {
  Images
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Startseite = (): JSX.Element => {
  const banner = {
    title: "<p>Unterstützend zu deinem Training -</p><p>Professionelle <label>Sport Massagen</label></p>",
    description: `
    Durch professionelle Massage wird das Verletzungsrisiko minimiert. Ich helfe dir deine sportlichen Ziele zu erreichen.
    `
  }
  const data1 = {
    title: "Angebot & Preise",
    description: `
    Je nach Ausgangslage werden die verschieden<br />
    Technicken und Methoden individuell kombiniert.
    `
  }
  const data2 = {
    title: "Öffnungszeiten",
    description: `
    Termine nach Absprache - Tagsüber und abends, Samstag und Sonntag ebenfalls möglich<br />
    Am Wochenende auch ausserhalb der Öffnungszeiten des Sportgyms.
    `
  }
  return (
    <HomeWrapper>
      <Banner page="home" data={banner} />
      <SimpleText data={data1}/>
      <Empty height={40} />
      <Card />
      <Empty height={44} />
      <Price />
      <Price />
      <Empty height={22} />
      <Text />
      <Empty height={44} />
      <SimpleText data={data2}/>
      <Empty height={66} />
      <UberMich />
      <Kontakt />
    </HomeWrapper>
  );
};

export default Startseite;