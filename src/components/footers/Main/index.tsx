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
            <div className="wrapper">
              <div className="icon">
                <img src={Icons.CallIconUrl} />
                <div className="line"></div>
              </div>
              <div className="txt">
                <p><a className="link" href="mailto:info@dynamicbodymassage.ch">info@dynamicbodymassage.ch</a></p>
                <p><a className="link" href="tel:+41 079 123 45 67">+41 079 123 45 67</a></p>
              </div>
              <div className="social">
                <a href="https://www.facebook.com"><img src={Icons.FacebookIconUrl} /></a>
                <a href="https://www.instagram.com"><img src={Icons.CameraIconUrl} /></a>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <div className="icon">
                <img src={Icons.SignupIconUrl} />
                <div className="line"></div>
              </div>
              <div className="txt">
                <p>
                  Sportgym Aarburg<br />Wallgrabenweg 13<br />4663 Aarburg
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section>
        <div className="content">
          <div className="txt">©Copyright 2023 - dynamic body massage</div>
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
