import styled from "styled-components";

export const UberMichWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};

  .wrapper {
    background-color: ${props => props.theme.colors.blue_secondary};
    border-radius: 45px 0 0 45px;
    padding: 106px 0 56px;
    .content {
      margin: 0 ${props => props.theme.margins.primary}px;
      display: flex;
      flex-direction: column-reverse;
      row-gap: 50px;

      .article {
        flex: 1 1 auto;
        > h1 {
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          color: ${props => props.theme.colors.white};
        }

        > p {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: ${props => props.theme.colors.white_primary};
        }
      }

      .pic {
        display: flex;
        justify-content: center;
        flex: 1 0 auto;
        .shape-wrapper {
          position: relative;
          .shape-1 {
            background-color: ${props => props.theme.colors.blue_third};
            border: 4px solid ${props => props.theme.colors.blue_secondary};
            width: 152px;
            height: 152px;
            border-radius: 100%;
            margin-top: -245px;
          }

          .shape-2 {
            background-color: ${props => props.theme.colors.blue_fourth};
            border: 4px solid ${props => props.theme.colors.blue_secondary};
            width: 157px;
            height: 157px;
            border-radius: 100%;
            margin-top: 15px;
            margin-left: -15px;
          }

          .image {
            margin-left: 65px;
            margin-top: -150px;
            > img {
              width: 238px;
              height: 238px
            }
          }  
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    .wrapper {
      .content {
        .pic {
          .shape-wrapper {
            .shape-1 {
              width: 310px;
              height: 310px;
              margin-top: -520px;
              border-width: 12px;
            }
            .shape-2 {
              width: 318px;
              height: 318px;
              margin-top: 120px;
              margin-left: -50px;
              border-width: 12px;
            }

            .image {
              margin-left: 170px;
              margin-top: -300px;
              > img {
                width: 480px;
                height: 480px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .wrapper {
      border-radius: 360px 0 0 360px;
      .content {
        width: ${props => props.theme.maxWidth}px;
        margin: 0 auto;
        flex-direction: row;

        .pic {
          margin-left: 50px;
        }
      }
    }
  }
`