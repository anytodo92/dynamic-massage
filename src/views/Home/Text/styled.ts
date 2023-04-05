import styled from "styled-components";

export const TextWrapper = styled.section`
  padding: 5px 0 29px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > p {
      display: block;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      text-align: left;
      padding-left: 10px;
      color: ${props => props.theme.colors.gray_primary};
    }
  }

  @media(min-width: 900px) {
    padding: 22px 0 44px;
    .content {      
      > p {
        text-align: center;
        font-size: 14px;
        line-height: 22px;
        padding-left: 0;
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