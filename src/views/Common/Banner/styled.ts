import styled from "styled-components";


export const BannerWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding-bottom: 40px;
  position: relative;
  overflow: hidden;
  .wrapper {
    max-width: 2036px;
    margin: 0 auto;
  }
  .curve-wrapper {
    position: absolute;
    top: -100px;
    left: 0;
    width: 1173px;
    height:747px;
    display: none;

    svg {
      width: 1134px;
    }
  }

  .shape-wrapper {
    display: block;
    flex-direction: column;

    .logo {
      background-position: 0 center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 305px;
      height: 216px;
      margin: 29px auto;
      position: relative;

      img {
        max-width: none;
      }
    }

    .circle {
      margin: -230px auto;
      width: 150px;
      .shape-1 {
        width: 247px;
        height: 247px;
        background-color: ${props => props.theme.colors.gray_secondary};
        border-radius: 100%;
      }

      .shape-2 {
        width: 168px;
        height: 168px;
        background-color: ${props => props.theme.colors.gray_secondary};
        border-radius: 100%;
        border: 12px solid ${props => props.theme.colors.white};
        margin-top: -240px;
        margin-left: -95px;
      }
    }
  }

  .summary {
    margin: 280px ${props => props.theme.margins.primary}px 0;
    max-width: 400px;
    > h1 {
      font-weight: 500;
      color: ${props => props.theme.colors.black};
      font-size: 20px;
      line-height: 29px;

      label {
        color: ${props => props.theme.colors.blue_secondary};
      }
    }

    > p {
      font-weight: 400;
      color: ${props => props.theme.colors.gray_primary};
      font-size: 14px;
      line-height: 20px;
      margin-top: 5px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    .summary {
      margin: 280px auto 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &.datenschutz {
      .summary {
        transform: translateX(110%);
        top: 180px;
      }
    }

    &.impressum {
      .summary {
        transform: translateX(110%);
        top: 180px;
      }
    }

    .summary {
      margin: 0;
      position: absolute;
      top: 200px;
      right: 40%;
      transform: translateX(90%);
      margin-right: 20px;
      width: 480px;
      max-width: unset;
      > h1 {
        font-size: 24px;
        line-height: 34px;
      }

      > p {
        font-size: 14px;
        line-height: 24px;        
      }
    }
    .curve-wrapper {
      top: -100px;
      display: block;
    }

    .shape-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .logo {
        background-position: 0 0;
        width: 842px;
        height: 596px;
        margin: 37px 0 0 0;
      }
      .circle {
        margin: 0;
        margin-top: 150px;
        width: auto;

        .shape-1 {
          width: 315px;
          height: 315px;
          margin-right: 60px;
        }

        .shape-2 {
          width: 210px;
          height: 210px;
          margin-top: -310px;
          margin-left: -110px;
        }
      }
    }
  }

  @media (min-width: 1080px) {
    &.impressum {
      .summary {
        transform: translateX(110%);
        top: 200px;
      }
    }
    &.datenschutz {
      .summary {
        transform: translateX(110%);
        top: 200px;
      }
    }
    .summary {
      top: 230px;
    }
  }
  @media (min-width: 1250px) {
    .summary {
      top: 250px;
    }
  }

  @media (min-width: 1300px) {
    &.impressum {
      .summary {
        transform: translateX(105%);
        top: 230px;
      }
    }
    &.datenschutz {
      .summary {
        transform: translateX(105%);
        top: 230px;
      }
    }
    .summary {
      transform: translateX(85%);
      top: 260px;
      width: 630px;
      > h1 {
        font-size: 32px;
        line-height: 42px;
      }

      > p {
        font-size: 18px;
        line-height: 27px;        
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    &.impressum {
      .summary {
        transform: translateX(95%);
      }
    }
    &.datenschutz {
      .summary {
        transform: translateX(95%);
      }
    }
    .summary {
      width: 720px;
      > h1 {
        font-size: 36px;
        line-height: 54px;
      }
    }
    .curve-wrapper {
      top: -50px;
    }
    .shape-wrapper {
      .circle {

        padding-bottom: 250px;
        .shape-1 {
          width: 414px;
          height: 414px;
          margin-right: 60px;
        }

        .shape-2 {
          width: 276px;
          height: 276px;
          margin-top: -420px;
          margin-left: -150px;
        }
      }
    }
  }

  @media (min-width: 1683px) {
    .curve-wrapper {
      top: 0;
    }
    .shape-wrapper {
      .circle {
        padding-bottom: 200px;
        .shape-1 {
          width: 614px;
          height: 614px;
          margin-right: 60px;
        }

        .shape-2 {
          width: 418px;
          height: 418px;
          margin-top: -620px;
          margin-left: -250px;
        }
      }
    }
  }

  @media (min-width: 2036px) {
    .curve-wrapper {
      svg {
        width: 55.69vw;
      }
    }
  }

`