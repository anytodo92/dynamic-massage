import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndexes.footer_layout};
  
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  > section {
    &:first-child {
      padding: 20px 0;
      background-color: ${props => props.theme.colors.blue_primary};

      .content {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 30px;
        p, a.link {
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
          color: ${props => props.theme.colors.white};
        }

        a.link {
          &:hover {
            color: ${props => props.theme.colors.white};
            text-decoration: none;
          }
        }

        > div {
          display: flex;
          justify-content: center;

          .wrapper {
            .icon {
              display: flex;
              flex-direction: column;
              align-items: center;
              row-gap: 15px;
              > img {
                width: 44px;
                height: 44px;
              }

              .line {
                width: 68px;
                border-top: 3px solid ${props => props.theme.colors.white};
              }
            }
            .txt {
              margin-top: 5px;
              text-align: center;
            }
          }

          &:last-child {
            text-align: left;
          }
        }
      }
    }

    &:last-child {
      background-color: ${props => props.theme.colors.blue_secondary};
      
      .content {
        display: flex;
        padding: 30px 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .txt {
          text-align: center;
        }
        .policy {
          display: flex;
          column-gap: 30px;
          a.link {
            &:hover {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    > section {
      &:last-child {
        .content {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    > section {
      &:first-child {
        .content {
          grid-template-columns: 1fr 1fr 1fr;

          > div {
            &:nth-child(1) {
              justify-content: flex-start;
            }
            &:nth-child(2) {
              .wrapper {
                .icon {
                  align-items: center;
                }
                .txt {
                  text-align: center;
                }
              }
            }
            &:last-child {
              justify-content: flex-end;
              .wrapper {
                .icon {
                  align-items: flex-end;
                }
                .txt {
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`