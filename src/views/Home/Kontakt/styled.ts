import styled from "styled-components";

export const KontaktWrapper = styled.section`
  padding: 40px 0 60px;
  background-color: ${props => props.theme.colors.white};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .alert {
    padding: 17px 30px 17px 30px;
    margin-bottom: 20px;
    &.alert-danger {
     color: #f1416c;
     background-color: #fff5f8;
    }
    &.alert-success {
      color: #50cd89;
      background-color: #e8fff3;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: ${props => props.theme.colors.black};
  }

  .yform {
    margin-top: 15px;
    .form {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
      row-gap: 10px;

      .col {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        
        > .group {
          > label {
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            color: ${props => props.theme.colors.black_primary};

            > sup {
              font-weight: 600;
              color: ${props => props.theme.colors.red_primary};
            }
          }

          input, select, textarea {
            outline: 0;
            border: 0;
            width: 100%;
            height: 48px;
            background-color: #efefef;
            border-radius: 15px;
            padding: 0 12px;
            color: ${props => props.theme.colors.black_primary};
            margin-top: 5px;
          }

          textarea {
            height: 308px;
            padding: 15px;
          }
        }
      }
    }
    
    button {
      display: inline-flex;
      width: 135px;
      height: 29px;
      justify-content: center;
      align-items: center;
      border-radius: 38px;
      cursor: pointer;
      margin-top: 10px;
      font-weight: 700;
      font-size: 12px;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.blue_secondary};
      font-family: ${props => props.theme.fonts.open_sans};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    h1 {
      font-size: 28px;
      line-height: 42px;
      text-align: center;
    }
    .yform {
      .form {
        row-gap: 13px;
        grid-template-columns: 1fr 1fr;
        .col {
          row-gap: 13px;
          &:first-child {
            padding-right: 22px;
          }

          .group {
            > label {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }

      button {
        font-size: 16px;
        width: 188px;
        height: 38px;
        margin-top: 18px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 340px);
      margin: 0 auto;
    }
  }
`