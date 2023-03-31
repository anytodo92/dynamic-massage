import { Images } from "../../../utils/assets";
import {
  BannerWrapper
} from "./styled";

type BannerPropsType = {
  data: any,
  page: string,
};

const Banner = ({ data, page }: BannerPropsType): JSX.Element => {
  return (
    <BannerWrapper className={page}>
      <div className="wrapper">
        <div className="curve-wrapper">
          <svg height="710" viewBox="0 0 1134 710" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M727 -36C641.282 91.8121 374.476 296.984 -7 95.1756" stroke="#C4C4C4" stroke-opacity="0.24" stroke-width="2"/>
            <path d="M1133 -38C1020.15 299.791 607.319 1008.97 -40 569.486" stroke="#C4C4C4" stroke-opacity="0.24" stroke-width="2"/>
          </svg>
        </div>
        <div className="shape-wrapper">
          <div className="logo" style={{ backgroundImage: `url(${Images.BlueLogoUrl})` }}></div>
          <div className="circle">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
          </div>
        </div>
        <div className="summary">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
      </div>
    </BannerWrapper>
  );
}

export default Banner;