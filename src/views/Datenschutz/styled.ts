import styled from "styled-components";

export const DatenschutzWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    padding: 0 0 80px;
  }

  .txt {
    letter-spacing: 0.6px;
    color: ${props => props.theme.colors.black_primary};
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    strong {
      font-weight: 700;
    }

    p {
      //word-break: break-all;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;  
    }
  }
`;