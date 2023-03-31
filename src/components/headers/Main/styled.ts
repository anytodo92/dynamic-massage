import styled from "styled-components";

export const MainHeaderWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  height: 100px;
  overflow: hidden;
  
  z-index: ${props => props.theme.zIndexes.headerBar};
  transition: height .5s ease-in-out;

  &.open {
    height: 280px;
  }
  &.normal-bar {
    animation: anim-normal-bar-show;
    animation-duration: .1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      img {
        max-width: none;
        &:nth-child(1) {
          /*width: 59px;
          height: 59px;*/
        }
        &:nth-child(2) {
          /*width: 308px;
          height: 62px;*/
          display: none;
        }
      }
      .bold {
        font-weight: 600;
      }
    }

    .control {
      .menu {
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        height: 100px;
        margin: 0;
        list-style: none;
        
        transition: margin-top .4s ease-in-out, opacity .2s ease-in-out;
  
        > li {
          padding: 10px 0;
          border-bottom: 1px solid #eaeaea;
          > a {
            text-decoration: none;
            font-family: ${props => props.theme.fonts.open_sans};
            color: ${props => props.theme.colors.black_primary};
          }

          &.active > a {
            color: ${props => props.theme.colors.green_primary};
          }
        }
      }
    }

    .toggle-btn  {
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 30px;
      top: 30px;
      color: ${props => props.theme.colors.black};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &.normal-bar {
      animation: anim-normal-bar-show;
      animation-duration: .1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      /*background-color: transparent;*/
      
      .content {
        .brand {
          img {
            &:nth-child(2) {
              display: block;
            }
            &:nth-child(1)
            {
              display: none;
            }
          }
        }        
      }
    }

    &.sticky-bar {
      position: fixed;
      background-color: ${props => props.theme.colors.white};
      margin-top: 0px;
      height: 90px;
      
      .content {
        .brand {
          height: 90px;
          img {
            &:nth-child(1) {
              display: none;
            }
            &:nth-child(2)
            {
              display: block;
            }
          }
        }
        .control {
          .menu {
            height: 90px;            
          }
          .toggle-btn  {
            > span {
              background-color: ${props => props.theme.colors.black_primary};
            }   
          }
        }
      }
      animation: anim-sticky-bar-show;
      animation-duration: 0.3s;
      animation-timing-function: ease-out;
    }

    .content {
      justify-content: space-between;
      flex-direction: row;

      .control {
        display: flex;
        align-items: center;

        .menu {
          display: flex;
          align-items: center;
          clear: both;
          > li {
            float: left;
            margin: 0px 28px;
            border-bottom: none;
            padding: 0;

            &:last-child {
              margin-right: 0;
            }
            
            > a {
              color: ${props => props.theme.colors.black_primary}
            }

            &.active > a {
              color: ${props => props.theme.colors.black_primary};
            }
          }
        }
      }

      .toggle-btn {
        display: none;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

  @keyframes anim-normal-bar-show {
    from {
      margin-top: -10px;
    }
    to {
      margin-top: 0px;
    }
  }
  @keyframes anim-sticky-bar-show {
    from {
      top: -110px;
      display: none;
    }
    to {
      top: 0px;
      display: block;
    }
  }

  @keyframes anim-menu-item-show {
    from { margin-top: -110px; }
    to { margin-top: 0 }
  }
`;