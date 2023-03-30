import styled from "styled-components";

export const TextWrapper = styled.section`
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > p {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: ${props => props.theme.colors.gray_primary};
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 140px);
      margin: 0 auto;
    }
  }
`