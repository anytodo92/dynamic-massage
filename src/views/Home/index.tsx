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
      <Kontakt />
    </HomeWrapper>
  );
};

export default Startseite;