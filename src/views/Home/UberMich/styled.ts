import styled from "styled-components";

export const UberMichWrapper = styled.section`
margin-top: 200px;
  background-color: ${props => props.theme.colors.white};

  .wrapper {
    background-color: ${props => props.theme.colors.blue_secondary};
    
    padding: 106px 0 56px;
    .content {
      margin: 0 ${props => props.theme.margins.primary}px;
      display: flex;
      flex-direction: column;
      row-gap: 100px;

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
            border: 12px solid ${props => props.theme.colors.blue_secondary};
            width: 210px;
            height: 210px;
            border-radius: 100%;
            margin-top: -330px;
          }

          .shape-2 {
            background-color: ${props => props.theme.colors.blue_fourth};
            border: 12px solid ${props => props.theme.colors.blue_secondary};
            width: 218px;
            height: 218px;
            border-radius: 100%;
            margin-top: 15px;
            margin-left: -50px;
          }

          .image {
            margin-left: 96px;
            margin-top: -190px;
            > img {
              width: 280px;
              height: 280px
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
            }
            .shape-2 {
              width: 318px;
              height: 318px;
              margin-top: 120px;
              margin-left: -50px;
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