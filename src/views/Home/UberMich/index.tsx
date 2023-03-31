import {
  Images
} from "../../../utils/assets";
import {
  UberMichWrapper
} from "./styled";

const UberMich = (): JSX.Element => {
  return (
    <UberMichWrapper>
      <div className="wrapper">
        <div className="content">
          <div className="article">
            <h1>Über mich</h1>
            <p>
              Ein paar Säatze über dich. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="pic">
            <div className="shape-wrapper">
              <div className="shape-2"></div>
              <div className="shape-1"></div>
              
              <div className="image">
                <img src={Images.ManPhotoUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UberMichWrapper>
  );
}

export default UberMich;