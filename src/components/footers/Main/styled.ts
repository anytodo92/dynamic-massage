import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndexes.footer_layout};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  > section {
    &:first-child {
      padding: 20px 0;
      background-color: ${props => props.theme.colors.blue_primary};

      .content {
        display: grid;
        grid-template-columns: 1fr;
        > h5, > p, a.link {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          color: ${props => props.theme.colors.white};
        }

        a.link {
          &:hover {
            color: ${props => props.theme.colors.white};
            text-decoration: none;
          }
        }
      }
    }

    &:last-child {
      background-color: ${props => props.theme.colors.blue_secondary};
      
      .content {
        display: flex;
        height: 82px;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        justify-content: space-between;
        align-items: center;

        .policy {
          display: flex;
          column-gap: 30px;
          a.link {
            &:hover {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (min-width" ${props => props.theme.breakpoints.desktop}) {
    > section {
      &:first-child {
        .content {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`