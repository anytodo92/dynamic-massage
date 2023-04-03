import styled from "styled-components";

export const SimpleTextWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > h1 {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: ${props => props.theme.colors.black};
      text-align: left;
    }

    > p {
      text-align: left;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${props => props.theme.colors.gray_primary};
      margin-top: 15px;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      > h1 {
        text-align: center;
        font-size: 28px;
        line-height: 42px;
      }

      > p {
        text-align: center;
        font-size: 18px;
        line-height: 27px;
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