import {
  TextWrapper
} from "./styled";

export const Text = (): JSX.Element => {
  return (
    <TextWrapper>
      <div className="content">
        <p>
          Alle Studenden/Lehrlinge haben 10% auf alle Preise (gegen Vorzeigen des Ausweises)<br />
          Bei einem 10er Abo erhalten der Kunde die 11 Massage gratis
        </p>
      </div>
    </TextWrapper>
  );
}

export default Text;