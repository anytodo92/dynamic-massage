import UberMich from "./UberMich";
import Kontakt from "./Kontakt";
import {
  Images
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Startseite = (): JSX.Element => {
  return (
    <HomeWrapper>
      <UberMich />
      <Kontakt />
    </HomeWrapper>
  );
};

export default Startseite;