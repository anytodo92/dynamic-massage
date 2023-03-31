import Banner from "../Common/Banner";
import { Images } from "../../utils/assets";
import {
  ImpressumWrapper
} from "./styled";

const Impressum = (): JSX.Element => {
  const banner = {
    title: "<p>Impressum</p>",
    description: `
    <p><strong>dynamic body massage</strong></p>
    <p>Schwarzhaar 51</p>
    <p>4665 Oftringen</p>
    <p>Schweiz</p>
    <p>&nbsp;</p>
    <p><strong>E-Mail:</strong> info@dynamicbodymassage.ch</p>
    <p><strong>Internet:</strong> https://www.dynamicbodymassage.ch</p>
    <p>&nbsp;</p>
    <p><strong>Vertretungsberechtigte Personen:</strong></p>
    <p>Davide Cinque</p>
    <p>&nbsp;</p>
    <p>UID: CH-400.4.449.414-4</p>
    `,
  };

  return (
    <ImpressumWrapper>
      <Banner data={banner} page="impressum" />      
    </ImpressumWrapper>
  );
};

export default Impressum;