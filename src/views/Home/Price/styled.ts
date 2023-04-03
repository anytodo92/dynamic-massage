import styled from "styled-components";

export const PriceWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  margin-top: -1px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    .prices {
      display: flex;
      justify-content: center;

      .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        .one {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-top: 1px solid ${props => props.theme.colors.gray_third};
          padding: 15px 0;
          > h1 {
            font-weight: 500;
            font-size: 12px;
            line-height: 22px;
            color: ${props => props.theme.colors.black};
            text-align: center;
          }

          > p {
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
            color: ${props => props.theme.colors.black};
            text-align: center;
            margin-top: 5px;
          }

          &:last-child {
            border-bottom: 1px solid #F5F5F5;
          }
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      .cards {
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 65px;
      }

      .prices {
        justify-content: center;
        padding: 15px 0;
        border-top: 1px solid ${props => props.theme.colors.gray_third};
        border-bottom: 1px solid ${props => props.theme.colors.gray_third};
        .wrapper {
          width: auto;
          flex-direction: row;
          column-gap: 80px;
          .one {
            flex-direction: column;
            width: 125px;
            border: none!important;

            > h1 {
              font-size: 18px;
              line-height: 22px;
            }

            > p {
              font-size: 18px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 140px);
      margin: 0 auto;
    }
  }
`