import styled from "styled-components";

export const CardWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    .cards {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 27px;

      .one {
        box-shadow: 10px 32px 72px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        background-color: ${props => props.theme.colors.white};
        padding: 15px 50px 48px 25px;

        > h1 {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: ${props => props.theme.colors.black};
          margin-top: 15px;
        }

        > p {
          margin-top: 20px;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: ${props => props.theme.colors.gray_primary};
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
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 140px);
      margin: 0 auto;
    }
  }
`