import {
  Images,
  Icons,
} from "../../../utils/assets";
import {
  FooterWrapper
} from "./styled";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <section>
        <div className="content">
          <div><img src={Images.WhiteLogoUrl} /></div>
          <div>
            <div className="icon">
              <img src={Icons.CallIconUrl} />
              <div className="line"></div>
            </div>
            <p><a className="link" href="mailto:info@dynamicbodymassage.ch">info@dynamicbodymassage.ch</a></p>
            <p><a className="link" href="tel:+41 079 123 45 67">+41 079 123 45 67</a></p>
          </div>
        </div>
        <div>
          <div className="icon">
            <img src={Icons.SignupIconUrl} />
            <div className="line"></div>
          </div>
          <p>
            Sportgym Aarburg<br />Wallgrabenweg 13<br />4663 Aarburg
          </p>
        </div>
      </section>
      <section>
        <div className="content">
          <div>©Copyright 2023 - dynamic body massage</div>
          <div className="policy">
            <a className="link" href="/impressum">Impressum</a>
            <a className="link" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
