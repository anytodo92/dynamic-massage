import styled from "styled-components";

export const SimpleTextWrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > h1 {
      font-weight: 500;
      font-size: 28px;
      line-height: 42px;
      color: ${props => props.theme.colors.black};
      text-align: center;
    }

    > p {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: ${props => props.theme.colors.gray_primary};
      margin-top: 15px;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 140px);
      margin: 0 auto;
    }
  }
`