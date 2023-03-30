import Banner from "../Common/Banner";
import { Images } from "../../utils/assets";
import {
  ImpressumWrapper
} from "./styled";

const Impressum = (): JSX.Element => {
  const banner = {
    title: "<p>#Zusätzliches</p>",
    description: `
    Impressum
    `,
  };

  return (
    <ImpressumWrapper>
      {/*<Banner data={banner} page="impressum" />*/}
      <div className="content txt-wrapper">
      <div className="txt">
      Resin Art & Coaching GmbH<br/>
      Schwarzhaar 51<br/>
      4665 Oftringen<br/>
      Schweiz
      <br /><br />
      E-Mail: info@resinart-coaching.ch<br/>
      Internet: https://www.resinart-coaching.ch
      <br /><br />
      Vertretungsberechtigte Personen:<br/>
      Marcello Pierri,<br/>
      Sylive Pierri
      <br /><br />
      UID: CH-400.4.449.414-4
      </div>
      <div className="divider"></div>
      </div>
      
    </ImpressumWrapper>
  );
};

export default Impressum;