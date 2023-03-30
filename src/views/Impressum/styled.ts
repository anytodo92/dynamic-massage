import styled from "styled-components";

export const ImpressumWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray_primary};
  
  .content {
    &.txt-wrapper {
      padding: 60px 0 30px;
      font-size: 18px;
      color: $color-black;
      font-weight: 300;
    }
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .txt {
    max-width: 880px;
    letter-spacing: 0.6px;
    color: ${props => props.theme.colors.black_primary};
    font-family: ${props => props.theme.fonts.open_sans};
    strong {
      font-weight: 700;
    }
  }

  .divider {
    background-color: ${props => props.theme.colors.green_primary};
    margin: 30px 0 10px;
    height: 2px;
    max-width: 811px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;  
    }
  }
`;